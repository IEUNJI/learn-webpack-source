module.exports = {
  // 编译中有没有错误
  "errors": [],
  // 编译中有没有警告
  "warnings": [],
  // webpack 版本号
  "version": "4.46.0",
  // 本次编译的哈希值
  "hash": "b80fc7ef787899c5a6d8",
  // 总共花费的时间 ms
  "time": 619,
  // 构建的时间 时间戳
  "builtAt": 1621132992029,
  // 访问路径
  "publicPath": "",
  // 输出目录
  "outputPath": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\dist",
  // 产出资源的代码块的名字
  "assetsByChunkName": {
    "lazy": "lazy.bundle.js",
    "main": "bundle.js"
  },
  // 产出的资源
  "assets": [
    {
      // 生成的文件名
      "name": "bundle.js",
      // 预估的文件大小
      "size": 9251,
      // 这个文件里包含的代码块
      "chunks": [
        "main"
      ],
      // 包含的代码块的名字
      "chunkNames": [
        "main"
      ],
      "info": {},
      // 是否文件已经生成
      "emitted": true
    },
    {
      "name": "lazy.bundle.js",
      "size": 286,
      "chunks": [
        "lazy"
      ],
      "chunkNames": [
        "lazy"
      ],
      "info": {},
      "emitted": true
    }
  ],
  // 过滤资源
  "filteredAssets": 0,
  // 入口点
  "entrypoints": {
    "main": {
      "chunks": [
        "main"
      ],
      "assets": [
        "bundle.js"
      ],
      "children": {},
      "childAssets": {}
    }
  },
  "namedChunkGroups": {
    "main": {
      "chunks": [
        "main"
      ],
      "assets": [
        "bundle.js"
      ],
      "children": {},
      "childAssets": {}
    },
    "lazy": {
      "chunks": [
        "lazy"
      ],
      "assets": [
        "lazy.bundle.js"
      ],
      "children": {},
      "childAssets": {}
    }
  },
  // 代码块
  "chunks": [
    {
      "id": "lazy",
      "rendered": true,
      // 是否同步初始化
      "initial": false,
      // 是否为入口代码块
      "entry": false,
      "size": 26,
      "names": [
        "lazy"
      ],
      "files": [
        "lazy.bundle.js"
      ],
      // chunkhash
      "hash": "6a358d5488885ca16e85",
      "siblings": [],
      // 父级
      "parents": [
        "main"
      ],
      "children": [],
      "childrenByOrder": {},
      "modules": [
        {
          // 模块 ID
          "id": "./src/lazy.js",
          "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\lazy.js",
          "name": "./src/lazy.js",
          "index": 2,
          "index2": 2,
          "size": 26,
          "cacheable": true,
          // 是否经过 loader 编译
          "built": true,
          "optional": false,
          // 是否需要预获取
          "prefetched": false,
          "chunks": [
            "lazy"
          ],
          "issuer": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "issuerId": "./src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                // 工厂创建模块耗时
                "factory": 143,
                // loader 编译耗时
                "building": 83
              }
            }
          ],
          "profile": {
            "factory": 36,
            "building": 25
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          // 表示本模块被添加的原因
          "reasons": [
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "import()",
              "userRequest": "./lazy",
              // 在源代码中的位置
              "loc": "3:0-6:1"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 1,
          "source": "module.exports = 'lazy';\r\n"
        }
      ],
      "filteredModules": 0,
      "origins": [
        {
          "moduleId": "./src/index.js",
          "module": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "moduleName": "./src/index.js",
          "loc": "3:0-6:1",
          "request": "./lazy",
          "reasons": []
        }
      ]
    },
    {
      "id": "main",
      "rendered": true,
      "initial": true,
      "entry": true,
      "size": 194,
      "names": [
        "main"
      ],
      "files": [
        "bundle.js"
      ],
      "hash": "c8a7ddc9629469b6e5d5",
      "siblings": [],
      "parents": [],
      "children": [
        "lazy"
      ],
      "childrenByOrder": {},
      "modules": [
        {
          "id": "./src/hello.js",
          "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\hello.js",
          "name": "./src/hello.js",
          "index": 1,
          "index2": 0,
          "size": 27,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "issuerId": "./src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 143,
                "building": 83
              }
            }
          ],
          "profile": {
            "factory": 36,
            "building": 25
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "harmony side effect evaluation",
              "userRequest": "./hello",
              "loc": "1:0-28"
            },
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "harmony import specifier",
              "userRequest": "./hello",
              "loc": "10:12-17"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 1,
          "source": "module.exports = 'hello';\r\n"
        },
        {
          "id": "./src/index.js",
          "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "name": "./src/index.js",
          "index": 0,
          "index2": 1,
          "size": 167,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": null,
          "issuerId": null,
          "issuerName": null,
          "issuerPath": null,
          "profile": {
            "factory": 143,
            "building": 83
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": null,
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "type": "single entry",
              "userRequest": "./src/index.js",
              "loc": "main"
            }
          ],
          "providedExports": [],
          "optimizationBailout": [],
          "depth": 0,
          "source": "import hello from './hello';\r\n\r\nimport(\r\n  /* webpackChunkName: \"lazy\" */\r\n  './lazy'\r\n).then(module => {\r\n  console.log(module.default);\r\n});\r\n\r\nconsole.log(hello);\r\n"
        }
      ],
      "filteredModules": 0,
      "origins": [
        {
          "module": "",
          "moduleIdentifier": "",
          "moduleName": "",
          "loc": "main",
          "request": "./src/index.js",
          "reasons": []
        }
      ]
    }
  ],
  // 模块
  "modules": [
    {
      "id": "./src/hello.js",
      "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\hello.js",
      "name": "./src/hello.js",
      "index": 1,
      "index2": 0,
      "size": 27,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
      "issuerId": "./src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 143,
            "building": 83
          }
        }
      ],
      "profile": {
        "factory": 36,
        "building": 25
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "harmony side effect evaluation",
          "userRequest": "./hello",
          "loc": "1:0-28"
        },
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "harmony import specifier",
          "userRequest": "./hello",
          "loc": "10:12-17"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 1,
      "source": "module.exports = 'hello';\r\n"
    },
    {
      "id": "./src/index.js",
      "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
      "name": "./src/index.js",
      "index": 0,
      "index2": 1,
      "size": 167,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": null,
      "issuerId": null,
      "issuerName": null,
      "issuerPath": null,
      "profile": {
        "factory": 143,
        "building": 83
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": null,
          "moduleIdentifier": null,
          "module": null,
          "moduleName": null,
          "type": "single entry",
          "userRequest": "./src/index.js",
          "loc": "main"
        }
      ],
      "providedExports": [],
      "optimizationBailout": [],
      "depth": 0,
      "source": "import hello from './hello';\r\n\r\nimport(\r\n  /* webpackChunkName: \"lazy\" */\r\n  './lazy'\r\n).then(module => {\r\n  console.log(module.default);\r\n});\r\n\r\nconsole.log(hello);\r\n"
    },
    {
      "id": "./src/lazy.js",
      "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\lazy.js",
      "name": "./src/lazy.js",
      "index": 2,
      "index2": 2,
      "size": 26,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "lazy"
      ],
      "issuer": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
      "issuerId": "./src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 143,
            "building": 83
          }
        }
      ],
      "profile": {
        "factory": 36,
        "building": 25
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "C:\\Users\\linzi\\Documents\\Projects\\learn-webpack-source\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "import()",
          "userRequest": "./lazy",
          "loc": "3:0-6:1"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 1,
      "source": "module.exports = 'lazy';\r\n"
    }
  ],
  "filteredModules": 0,
  "logging": {
    "webpack.buildChunkGraph.visitModules": {
      "entries": [],
      "filteredEntries": 5,
      "debug": false
    }
  },
  "children": []
};
