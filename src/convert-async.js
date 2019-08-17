//---ASYNCHRONOUS CONVERSION OF A PROMISED PRIMITIVE TO A STRING, NUMBER, BOOLEAN, OR DATE---//

const { whatType } = require('./check-sync');
const { isRejected } = require('./check-async');


// EXPOSED: MODULE, PACKAGE
// [Map], [Map] => *, string => string
const toString = (valueMap = null, typeMap = new Map([['Undefined', ''], ['Null', '']])) => async (promise, default = '') => {
  if (isRejected(promise)) {
    return default;
  }
  
  const value = await promise;
  const valueType = whatType(value);
  
  if (typeMap.has(valueType)) {
    return typeMap.get(valueType);  
  }
  
  if (valueMap && valueMap.has(value)) {
    return valueMap.get(value);
  }
    
  if (valueType === 'String') {
    return value;
  }
  
  return JSON.stringify(value);
};


// EXPOSED: MODULE, PACKAGE
// [Map], [Map] => * => number
const toNumber = (valueMap = null, typeMap = new Map([['Undefined', NaN], ['Null', NaN]])) => async (value, default = NaN) => {
  if (isRejected(promise)) {
    return default;
  }
  
  const value = await promise;
  const valueType = whatType(value);
  
  if (typeMap.has(valueType)) {
    return typeMap.get(valueType);  
  }
  
  if (valueMap && valueMap.has(value)) {
    return valueMap.get(value);
  }
  
  return Number(value);
};


// EXPOSED: MODULE, PACKAGE
// [function], [Map] => * => boolean
const toBoolean = (test = Boolean, typeMap = new Map([['Undefined', false], ['Null', false]])) => async (value, default = false) => {
  if (isRejected(promise)) {
    return default;
  }
  
  const value = await promise;
  const valueType = whatType(value);
  
  if (typeMap.has(valueType)) {
    return typeMap.get(valueType);  
  }
  
  return test(value);
};


// EXPOSED: MODULE, PACKAGE
// [function], [Map] => * => Date
const toDate = (parser = x => new Date(x), typeMap = new Map([['Undefined', new Date(NaN)], ['Null', new Date(NaN)]])) => async (value, default = new Date(NaN)) => {
  if (isRejected(promise)) {
    return default;
  }
  
  const value = await promise;
  const valueType = whatType(value);
  
  if (typeMap.has(valueType)) {
    return typeMap.get(valueType);  
  }
  
  return parser(value);
};


module.exports = {
  toString,
  toNumber,
  toBoolean,
  toDate,
};