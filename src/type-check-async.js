//---TYPE CHECKING WITH PROMISES---//

const { whatType } = require('./type-check-sync');


// INTERNAL
// [*] => promise<boolean>
const isRejected = async (promise) => {
  if (whatType(promise) !== 'Promise') {
    return false;
  }
  
  try {
    await promise;
    return false;
  } catch {
    return true;
  }
};


// INTERNAL
// string => [*] => promise<boolean>
const isPrimitive = type => async (promise) => {
  try {
    const value = await promise;
    
    return whatType(value) === type;
  } catch {
    return false;
  }
};


// INTERNAL
// [*] => promise<boolean>
const isPrimitiveArray = type => async (promise) => {
  try {
    const array = await promise;
  
    if (whatType(array) !== 'Array') {
      return false;
    }
  
    return array.every(x => whatType(x) === type);
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => promise<boolean>
const isTypedArray = (type = null) => async (promise) => {
  const bufferTypes = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'Float32Array',
    'Float64Array',
    'BigInt64Array',
    'BigUint64Array',
  ];
  
  const test = !type ? x => bufferTypes.includes(whatType(x)) : x => whatType(x) === type;
  
  try {
    const array = await promise;
    
    return test(array);
  } catch {
    return false;
  }
};
 

// EXPOSED: MODULE, PACKAGE
// [*] => promise<boolean>
const isDataTable = async (promise) => {
  const dt = await promise;

  if (whatType(dt) !== 'Object') {
    return false;
  }

  const keys = Object.keys(dt);

  if (keys.length === 0) {
    return false;
  }

  const valueTypes = keys.map(k => whatType(dt[k]));

  if (!valueTypes.every(x => (x === 'Array'))) {
    return false;
  }

  const arrayLengths = keys.map(k => dt[k].length);

  if (!arrayLengths.every(x => (x === arrayLengths[0]))) {
    return false;
  }

  return true;
};


module.exports = {
  isRejected,
  isString: isPrimitive('String'),
  isNumber: isPrimitive('Number'),
  isBoolean: isPrimitive('Boolean'),
  isDate: isPrimitive('Date'),
  isFunction: isPrimitive('Function'),
  isObject: isPrimitive('Object'),
  isArray: isPrimitive('Array'),
  isStringArray: isPrimitiveArray('String'),
  isNumberArray: isPrimitiveArray('Number'),
  isBooleanArray: isPrimitiveArray('Boolean'),
  isDateArray: isPrimitiveArray('Date'),
  isFunctionArray: isPrimitiveArray('Function'),
  isObjectArray: isPrimitiveArray('Object'),
  isTypedArray,
};