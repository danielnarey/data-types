// ---BASIC (SYNCHRONOUS) CONVERSION OF ANOTHER PRIMITIVE TO A STRING, NUMBER, BOOLEAN, OR DATE---//

const { whatType } = require('./check-sync');


// EXPOSED: MODULE, PACKAGE
// [Map], [Map] => * => string
const toString = (valueMap = null, typeMap = new Map([['Undefined', ''], ['Null', '']])) => (value) => {
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
const toNumber = (valueMap = null, typeMap = new Map([['Undefined', NaN], ['Null', NaN]])) => (value) => {
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
const toBoolean = (test = Boolean, typeMap = new Map([['Undefined', false], ['Null', false]])) => (value) => {
  const valueType = whatType(value);

  if (typeMap.has(valueType)) {
    return typeMap.get(valueType);
  }

  return test(value);
};


// EXPOSED: MODULE, PACKAGE
// [function], [Map] => * => Date
const toDate = (parser = x => new Date(x), typeMap = new Map([['Undefined', new Date(NaN)], ['Null', new Date(NaN)]])) => (value) => {
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
