// ---BASIC (SYNCHRONOUS) CONVERSION OF ANOTHER PRIMITIVE TO A STRING, NUMBER, BOOLEAN, OR DATE---//

const { whatType } = require('./check-sync');


// EXPOSED: MODULE, PACKAGE
// [Map], [Map] => * => string
const toString = (typeMap = new Map([['Undefined', ''], ['Null', '']])) => (valueMap = null) => (value) => {
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
const toNumber = (typeMap = new Map([['Undefined', NaN], ['Null', NaN]])) => (valueMap = null) => (value) => {
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
const toBoolean = (typeMap = new Map([['Undefined', false], ['Null', false]])) => (test = Boolean) => (value) => {
  const valueType = whatType(value);

  if (typeMap.has(valueType)) {
    return typeMap.get(valueType);
  }

  return test(value);
};


// EXPOSED: MODULE, PACKAGE
// [function], [Map] => * => Date
const toDate = (typeMap = new Map([['Undefined', new Date(NaN)], ['Null', new Date(NaN)]])) => (parser = x => new Date(x)) => (value) => {
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
