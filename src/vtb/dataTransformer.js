const preTransforms = require('./preTransforms');
const libTransforms = require('./libTransforms');

const configJson = require('../../vtb.json');

const vtbDataTransformer = {
  transform: function (vtbObj) {

    let customTransforms = {};
    if(configJson.dataTransformer !== undefined && configJson.dataTransformer.customFileLocation !== undefined){
      customTransforms = require('./'+configJson.dataTransformer.customFileLocation);
    }

    const transformFunctions = Object.assign({}, customTransforms, libTransforms, preTransforms);

    let executeTransforms = [];
    
    if(configJson.dataTransformer !== undefined && configJson.dataTransformer.methods !== undefined) {
      executeTransforms = configJson.dataTransformer.methods;
    }

    if(configJson.dataTransformer !== undefined && configJson.dataTransformer.startWithEmptyObject !== true) {
      executeTransforms.unshift({function: 'setTargetAsCopy'}, {function: 'removeCostPrices'});
    }

    let promise = Promise.resolve({dst: {}});
    executeTransforms.forEach(function(t){
      promise = promise.then(function(args){
        args.src = vtbObj;
        return transformFunctions[t.function](args, t.params);
      });
    });
    promise = promise.then(function(args){return args.dst;});
    return promise;
  }
}

module.exports = vtbDataTransformer;