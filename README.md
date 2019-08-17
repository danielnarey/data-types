# data-types

## Usage

CommonJS `require`: 
```
const { checkSync, checkAsync, convertSync, convertAsync } = require('data-types');
```

ES6 import (with Babel):
```
import { checkSync, checkAsync, convertSync, convertAsync } from 'data-types';
```

## Functions for Type Checking

The following functions perform type checking for JavaScript primitives and built-in data structures. 

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

### Sync vs Async

Calling `checkSync.isString` checks whether the value passed to the function is a string and returns `true` or `false`; calling `checkAsync.isString` awaits the value passed to the function before performing the check. With the async version, either a string or a promise resolving to a string returns a promise resolving to `true`; any other value (including a rejected promise) returns a promise resolving to `false`. 

### Checking for Single-typed Standard Arrays
The `is__Array` functions perform a check on each element of a standard array. Note that for the `checkAsync` version, the array may be wrapped in a promise, but the elements must not be or the function will return `false`. 

### Checking for TypedArray Buffer Types
The `isTypedArray` functions test whether the value is one of 11 built-in prototypes corresponding to underlying data buffers. The `is__TypedArray` functions test against subsets of these prototypes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) for more information about the `TypedArray` data structure.

## Functions for Type Conversion

The following intermediate functions allow the user to specify mappings for converting other primitives to string, number, boolean, or `Date` values. 

Included in **convertSync** and **convertAsync**:
- `toString`
- `toNumber`
- `toBoolean`
- `toDate`

### Value and Type Mapping

The intermediate functions `toString` and `toNumber` take two optional arguments: (1) a `Map` that maps individual values of any input type to result values, and (2) a `Map` that maps primitive/prototype names (as returned by `checkSync.whatType`) to result values. The first parameter is ignored (set to `null`) by default, and the second parameter maps `'Undefined'` and `'Null'` to the empty string `''` or `NaN` respectively. 

The intermediate function `toBoolean` takes a test function instead of a `Map` as its first argument. The test function should accept any value and return `true` or `false`. If no argments are given, the test function defaults to the built in `Boolean` function, which returns `true` if the value is truthy and false otherwise. The primitives `undefined` and `null` are mapped to `false` by default. 

The intermediate function `toDate` likewise takes a parsing function as its first argument. The parsing function should accept a string or number and return a `Date`. If no arguments are given, the parsing function defaults to `x => new Date(x)`. The primitives `undefined` and `null` are mapped to `new Date(NaN)` by default.

### Sync vs. Async

For the `convertSync` version, the returned function takes only one argument - the value to be converted. For the `convertAsync` version, the returned function is an `async` function that takes two arguments - the value to be converted and a default value to return if the argument is a promise that rejects. When a default value is not specified, a rejected promise will return the intermediate function's default for `undefined` and `null` (indicated above).
