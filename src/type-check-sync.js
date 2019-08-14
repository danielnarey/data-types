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
const isPrimitive = type => value => {
  try {
    return whatType(value) === type;
  } catch {
    return false;
  }
};


// INTERNAL
// [*] => boolean
const isPrimitiveArray = type => array => {
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
const isTypedArray = 


module.exports = {
  whatType,
  isString: isPrimitive('String'),
  isNumber: isPrimitive('Number'),
  isBoolean: isPrimitive('Boolean'),
  isDate: isPrimitive('Date'),
  isFunction: isPrimitive('Function'),
  isObject: isPrimitive('Object'),
  isArray: isPrimitive('Array'),
  isStringArray: isPrimitiveArray('String'),
  isNumberArray: x => isTypedArray(x) || isPrimitiveArray('Number')(x),
  isBooleanArray: isPrimitiveArray('Boolean'),
  isDateArray: isPrimitiveArray('Date'),
  isFunctionArray: isPrimitiveArray('Function'),
  isObjectArray: isPrimitiveArray('Object'),
  isTypedArray, 
};