const libTransforms = {
  'test': (obj, params) => {
    console.log(obj.src);
    console.log(obj.dst);
    console.log(params);
    return obj;
  },
  'test2': (obj, params) => {
    console.log(obj.src);
    console.log(obj.dst);
    console.log(params);
    return obj;
  }
};

module.exports = libTransforms;
