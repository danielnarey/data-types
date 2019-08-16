//---BASIC TYPE CHECKING---//

// INTERNAL
// [*] => string
const whatType = (value) => {
  if (value === undefined) {
    return 'Undefined';
  }

  if (value === null) {
    return 'Null';
  }

  return Object.prototype.toString.call(value).slice(8, -1);
};


// INTERNAL
// [*] => boolean
const isPrototype = type => value => {
  try {
    return whatType(value) === type;
  } catch {
    return false;
  }
};


// INTERNAL
// [*] => boolean
const isPrototypeArray = type => array => {
  try {
    if (whatType(array) !== 'Array') {
      return false;
    }
  
    return array.every(x => whatType(x) === type);
  } catch {
    return false;
  }
};
 

// EXPOSED: MODULE, PACKAGE
// [*] => boolean
const isAnyTypedArray = obj => {
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
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => boolean
const isIntTypedArray = obj => {
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
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => boolean
const isUintTypedArray = obj => {
  const bufferTypes = [
    'Uint8Array',
    'Uint8ClampedArray',
    'Uint16Array',
    'Uint32Array',
  ];
  
  try {
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => boolean
const isFloatTypedArray = obj => {
  const bufferTypes = [
    'Float32Array',
    'Float64Array',
  ];
  
  try {
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


// EXPOSED: MODULE, PACKAGE
// [*] => boolean
const isBigIntTypedArray = obj => {
  const bufferTypes = [
    'BigInt64Array',
    'BigUint64Array',
  ];
  
  try {
    return bufferTypes.includes(whatType(obj));
  } catch {
    return false;
  }
};


module.exports = {
  whatType,
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
  isAnyTypedArray,
  isIntTypedArray,
  isUintTypedArray,
  isFloatTypedArray,
  isBigIntTypedArray,
};
