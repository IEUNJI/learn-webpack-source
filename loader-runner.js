const path = require('path');
const fs = require('fs');

function createLoaderObject(loaderPath) {
  const loaderObject = {};

  loaderObject.data = {}; // 用来在 pitch 和 normal 间传递数据
  loaderObject.request = loaderPath;
  loaderObject.normal = require(loaderPath);
  loaderObject.pitch = loaderObject.normal.pitch;
  loaderObject.raw = loaderObject.normal.raw;

  return loaderObject;
}

function runLoaders(options, finallyCallback) {
  const loaderContext = options.context || {};

  loaderContext.resource = options.resource;
  loaderContext.loaders = options.loaders.map(createLoaderObject);
  loaderContext.loaderIndex = 0;
  loaderContext.readResource = options.readResource;

  let isSync = true;
  loaderContext.async = function () {
    isSync = false;
    return asyncCallback;
  };

  function asyncCallback(error, result) {
    isSync = true;
    loaderContext.loaderIndex--;
    iterateNormalLoaders(loaderContext, result, finallyCallback);
  }

  // 全部的
  Object.defineProperty(loaderContext, 'request', {
    get() {
      return loaderContext.loaders.map(loader => loader.request).concat(loaderContext.resource).join('!');
    }
  });

  // 剩下的
  Object.defineProperty(loaderContext, 'remindingRequest', {
    get() {
      return loaderContext.loaders.slice(loaderContext.loaderIndex + 1).map(loader => loader.request).concat(loaderContext.resource).join('!');
    }
  });

  // 剩下的（包括当前）
  Object.defineProperty(loaderContext, 'currentRequest', {
    get() {
      return loaderContext.loaders.slice(loaderContext.loaderIndex).map(loader => loader.request).concat(loaderContext.resource).join('!');
    }
  });

  // 之前的（不包括当前）
  Object.defineProperty(loaderContext, 'previousRequest', {
    get() {
      return loaderContext.loaders.slice(0, loaderContext.loaderIndex).map(loader => loader.request).join('!');
    }
  });

  iteratePitchingLoaders(loaderContext, finallyCallback);

  function iteratePitchingLoaders(loaderContext, finallyCallback) {
    if (loaderContext.loaderIndex >= loaderContext.loaders.length) {
      loaderContext.loaderIndex--;
      return processResource(loaderContext, finallyCallback);
    }

    const currentLoaderObject = loaderContext.loaders[loaderContext.loaderIndex];
    const pitchFn = currentLoaderObject.pitch;

    if (!pitchFn) {
      loaderContext.loaderIndex++;
      return iteratePitchingLoaders(loaderContext, finallyCallback);
    }

    const args = pitchFn.apply(loaderContext, [loaderContext.remindingRequest, loaderContext.previousRequest, currentLoaderObject.data]);

    if (typeof args !== 'undefined') {
      loaderContext.loaderIndex--;
      return iterateNormalLoaders(loaderContext, args, finallyCallback);
    } else {
      loaderContext.loaderIndex++;
      return iteratePitchingLoaders(loaderContext, finallyCallback);
    }
  }

  function processResource(loaderContext, finallyCallback) {
    const currentLoaderObject = loaderContext.loaders[loaderContext.loaderIndex];

    let result = loaderContext.readResource(loaderContext.resource);

    if (!currentLoaderObject.raw) {
      result = result.toString('utf8');
    }

    return iterateNormalLoaders(loaderContext, result, finallyCallback);
  }

  function iterateNormalLoaders(loaderContext, args, finallyCallback) {
    if (loaderContext.loaderIndex < 0) {
      return finallyCallback(null, args);
    }

    const currentLoaderObject = loaderContext.loaders[loaderContext.loaderIndex];
    const normalFn = currentLoaderObject.normal;

    args = normalFn.apply(loaderContext, [args]);

    if (isSync) {
      loaderContext.loaderIndex--;
      return iterateNormalLoaders(loaderContext, args, finallyCallback);
    }
  }
}

runLoaders({
  resource: path.resolve(__dirname, 'src/index.js'),
  loaders: [
    path.resolve(__dirname, 'loaders/loader1.js'),
    path.resolve(__dirname, 'loaders/loader2.js'),
    path.resolve(__dirname, 'loaders/loader3.js'),
  ],
  context: {},
  readResource: fs.readFileSync.bind(fs),
}, (error, result) => {
  console.log(result);
});
