const fs = require('fs');
const path = require('path');

const babylon = require('babylon');
const types = require('babel-types');
const traverse = require('babel-traverse').default;
const generator = require('babel-generator').default;

const ejs = require('ejs');

const mainTemplate = fs.readFileSync('./main.ejs', 'utf8');

class Compiler {
  constructor(config) {
    this.config = config;
  }

  run(callback) {
    const { entry } = this.config;

    this.entry = entry;
    this.modules = {};

    this.buildModule(entry);
    this.emitFiles();

    callback();
  }

  buildModule(moduleId) {
    const originalSource = fs.readFileSync(moduleId, 'utf8');

    const ast = babylon.parse(originalSource);

    const dependencies = [];

    traverse(ast, {
      CallExpression({ node }) {
        if (node.callee.name === 'require') {
          node.callee.name = '__webpack_require__';

          const moduleName = node.arguments[0].value;
          const dependencyModuleId = './' + path.posix.join(path.posix.dirname(moduleId), moduleName);

          dependencies.push(dependencyModuleId);
          node.arguments = [types.stringLiteral(dependencyModuleId)];
        }
      }
    });

    const { code } = generator(ast);

    this.modules[moduleId] = code;

    dependencies.forEach(dependency => {
      this.buildModule(dependency);
    });
  }

  emitFiles() {
    const { output } = this.config;

    const outputFile = path.posix.join(output.path, output.filename);

    const bundle = ejs.render(mainTemplate, {
      entry: this.entry,
      modules: this.modules
    });

    fs.writeFileSync(outputFile, bundle);
  }
}

const webpack = (config, callback) => {
  const compiler = new Compiler(config);

  compiler.run(callback);

  return compiler;
};

module.exports = webpack;
