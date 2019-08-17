# data-types

## Usage

```
const { 
  checkSync, 
  checkAsync, 
  convertSync, 
  convertAsync,
} = require('data-types');
```

## Functions for Type Checking

The following functions perform type checking for JavaScript primitives and built-in data structures. Calling `checkSync.isString` checks whether the value passed to the function is a string and returns `true` or `false`; calling `checkAsync.isString` awaits the value passed to the function before performing the check, so that either a string or a promise resolving to a string returns a promise resolving to `true` and any other value (including a rejected promise) returns a promise resolving to `false`. 

The `is__Array` functions perform a check on each element of a standard array. (Note that for the `checkAsync` version, the array may be wrapped in a promise, but the elements must not be or the function will return `false`). 

The `isTypedArray` functions test whether the value is one of 11 built-in prototypes corresponding to underlying data buffers. The `is__TypedArray` functions test against subsets of these prototypes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) for more information about the `TypedArray` data structure.

Included in **checkSync** and **checkAsync**:
- `isString`
- `isNumber`
- `isBoolean`
- `isSymbol`
- `isDate`
- `isRegExp`
- `isFunction`
- `isObject`
- `isArray`
- `isSet`
- `isMap`
- `isWeakSet`
- `isWeakMap`
- `isStringArray`
- `isNumberArray`
- `isBooleanArray`
- `isDateArray`
- `isFunctionArray`
- `isObjectArray`
- `isTypedArray`
- `isIntTypedArray`
- `isUintTypedArray`
- `isFloatTypedArray`
- `isBigIntTypedArray`

Included in **checkSync** only:
- `whatType`: Returns the argument's primitive data type or object prototype as an upper-camel-case string

Included in **checkAsync** only:
- `isRejected`: Returns true if the argument is a promise that rejects


## Functions for Type Conversion

The following intermediate functions allow the user to specify functions for converting other primitives to string, number, boolean, or `Date` values. 

The intermediate functions `toString` and `toNumber` take two optional arguments: (1) a `Map` that maps individual values of any input type to result values, and (2) a `Map` that maps primitive/prototype names (as returned by `checkSync.whatType`) to result values. The first parameter is ignored (set to `null`) by default, and the second parameter maps `'Undefined'` and `'Null'` to the empty string `''` or `NaN` respectively. 

The intermediate function `toBoolean`...

The intermediate function `toDate`...

For the `convertSync` version, the returned function takes only one argument - the value to be converted. For the `convertAsync` version, the returned function takes two arguments - the value to be converted and a default value to return if the argument is a rejected promise. When a default value is not specified, a rejected promise will return the intermediate function's default for `undefined` and `null` (indicated above).

Included in **convertSync** and **convertAsync**:
- `toString`
- `toNumber`
- `toBoolean`
- `toDate`