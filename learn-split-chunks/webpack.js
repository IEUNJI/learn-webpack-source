const fs = require('fs');
const path = require('path');

const babylon = require('babylon');
const types = require('babel-types');
const traverse = require('babel-traverse').default;
const generator = require('babel-generator').default;

const ejs = require('ejs');

const mainTemplate = fs.readFileSync('./main.ejs', 'utf8');
const chunkTemplate = fs.readFileSync('./chunk.ejs', 'utf8');

class Compiler {
  constructor(config) {
    this.config = config;
  }

  run(callback) {
    const { entry } = this.config;

    this.entry = entry;
    this.chunks = {
      main: {}
    };

    this.buildModule(entry, 'main');
    this.emitFiles();

    callback();
  }

  buildModule(moduleId, chunkId) {
    const originalSource = fs.readFileSync(moduleId, 'utf8');

    const ast = babylon.parse(originalSource, {
      plugins: ['dynamicImport']
    });

    const dependencies = [];

    traverse(ast, {
      CallExpression: (nodePath) => {
        const { node } = nodePath;

        if (node.callee.name === 'require') {
          node.callee.name = '__webpack_require__';

          const moduleName = node.arguments[0].value;
          const dependencyModuleId = './' + path.posix.join(path.posix.dirname(moduleId), moduleName);

          dependencies.push(dependencyModuleId);
          node.arguments = [types.stringLiteral(dependencyModuleId)];
        } else if (types.isImport(node.callee)) {
          const moduleName = node.arguments[0].value;
          const dependencyModuleId = './' + path.posix.join(path.posix.dirname(moduleId), moduleName);
          const dependencyChunkId = dependencyModuleId.slice(2).replace(/\/|\./g, '_') + '.js';

          nodePath.replaceWithSourceString(`
            __webpack_require__.e("${dependencyChunkId}").then(
              __webpack_require__.t.bind(__webpack_require__, "${dependencyModuleId}")
            )
          `);

          this.buildModule(dependencyModuleId, dependencyChunkId);
        }
      }
    });

    const { code } = generator(ast);

    this.chunks[chunkId] = this.chunks[chunkId] || {};
    this.chunks[chunkId][moduleId] = code;

    dependencies.forEach(dependency => {
      this.buildModule(dependency);
    });
  }

  emitFiles() {
    const { output } = this.config;

    Object.keys(this.chunks).forEach(chunkId => {
      if (chunkId === 'main') {
        const outputFile = path.posix.join(output.path, output.filename);

        const bundle = ejs.render(mainTemplate, {
          entry: this.entry,
          modules: this.chunks[chunkId]
        });

        fs.writeFileSync(outputFile, bundle);
      } else {
        const outputFile = path.posix.join(output.path, chunkId);

        const bundle = ejs.render(chunkTemplate, {
          chunkId,
          modules: this.chunks[chunkId]
        });

        fs.writeFileSync(outputFile, bundle);
      }
    });
  }
}

const webpack = (config, callback) => {
  const compiler = new Compiler(config);

  compiler.run(callback);

  return compiler;
};

module.exports = webpack;
