// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var stringifiedArray = obj.map(function (val) {
      return stringifyJSON(val);
    });

    return '[' + stringifiedArray.join(',') + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    var objectKeys = Object.keys(obj);

    var stringifiedObject = objectKeys
      .filter(function (key) {
        return obj[key] !== undefined && typeof obj[key] !== 'function';
      })
      .map(function (key) {
        return stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      });

    return '{' + stringifiedObject.join(',') + '}';
  } else {
    return 'null';
  }
};
