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
const isPrototype = type => async (promise) => {
  try {
    const value = await promise;
    
    return whatType(value) === type;
  } catch {
    return false;
  }
};


// INTERNAL
// [*] => promise<boolean>
const isPrototypeArray = type => async (promise) => {
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
const isTypedArray = async (promise) => {
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
  
  try {
    const obj = await promise;
    
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => promise<boolean>
const isIntTypedArray = async (promise) => {
  const bufferTypes = [
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
  ];
  
  try {
    const obj = await promise;
    
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => promise<boolean>
const isUintTypedArray = async (promise) => {
  const bufferTypes = [
    'Uint8Array',
    'Uint8ClampedArray',
    'Uint16Array',
    'Uint32Array',
  ];
  
  try {
    const obj = await promise;
    
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => promise<boolean>
const isFloatTypedArray = async (promise) => {
  const bufferTypes = [
    'Float32Array',
    'Float64Array',
  ];
  
  try {
    const obj = await promise;
    
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => promise<boolean>
const isBigIntTypedArray = async (promise) => {
  const bufferTypes = [
    'BigInt64Array',
    'BigUint64Array',
  ];
  
  try {
    const obj = await promise;
    
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


module.exports = {
  isRejected,
  isString: isPrototype('String'),
  isNumber: isPrototype('Number'),
  isBoolean: isPrototype('Boolean'),
  isSymbol: isPrototype('Symbol'),
  isDate: isPrototype('Date'),
  isRegExp: isPrototype('RegExp'),
  isFunction: isPrototype('Function'),
  isObject: isPrototype('Object'),
  isArray: isPrototype('Array'),
  isSet: isPrototype('Set'),
  isMap: isPrototype('Map'),
  isWeakSet: isPrototype('WeakSet'),
  isWeakMap: isPrototype('WeakMap'),
  isStringArray: isPrototypeArray('String'),
  isNumberArray: isPrototypeArray('Number'),
  isBooleanArray: isPrototypeArray('Boolean'),
  isDateArray: isPrototypeArray('Date'),
  isFunctionArray: isPrototypeArray('Function'),
  isObjectArray: isPrototypeArray('Object'),
  isTypedArray,
  isIntTypedArray,
  isUintTypedArray,
  isFloatTypedArray,
  isBigIntTypedArray,
};
