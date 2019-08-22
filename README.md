# @danielnarey/data-types [![Build Status](https://travis-ci.com/danielnarey/data-types.svg?branch=master)](https://travis-ci.com/danielnarey/data-types) [![npm (scoped)](https://img.shields.io/npm/v/@danielnarey/data-types)](https://www.npmjs.com/package/@danielnarey/data-types)

**Simple type checking and conversion for standard JS data types**


## Install

```
npm i @danielnarey/data-types
```

## Functions for Type Checking

The **checkSync** and **checkAsync** modules include type-checking functions for JavaScript primitives and built-in data structures.

### Usage

CommonJS `require`:
```
const { checkSync, checkAsync } = require('data-types');
```

ES6 `import` (using Babel):
```
import { checkSync, checkAsync } from 'data-types';
```

### API

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
- `isRejected`: Returns a promise resolving to true if the argument is a promise that rejects

### Sync vs Async

Calling `checkSync.isString` checks whether the value passed to the function is a string and returns `true` or `false`; calling `checkAsync.isString` awaits the value passed to the function before performing the check. With the async version, either a string or a promise resolving to a string returns a promise resolving to `true`; any other value (including a rejected promise) returns a promise resolving to `false`. 

### Checking for Single-typed Standard Arrays
The `is__Array` functions perform a check on each element of a standard array using an optimized implementation of `every`. Note that for the `checkAsync` version, the array may be wrapped in a promise, but the elements must not be or the function will return `false`. 

### Checking for TypedArray Buffer Types
The `isTypedArray` functions test whether the value is one of 11 built-in prototypes corresponding to underlying data buffers. The `is__TypedArray` functions test against subsets of these prototypes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) for more information about the `TypedArray` data structure.


## Functions for Type Conversion

The **convertSync** and **convertAsync** modules contain curried functions allow the user to specify type and value mappings for converting other primitives to string, number, boolean, or `Date` values. 

### Usage

CommonJS `require`:
```
const { convertSync, convertAsync } = require('data-types');
```

ES6 `import` (using Babel):
```
import { convertSync, convertAsync } from 'data-types';
```

### API

Included in **convertSync** and **convertAsync**:
- `toString`: uses `JSON.stringify()` for unmapped values
- `toNumber`: uses `Number()` for unmapped values
- `toBoolean`: uses `Boolean()` as default test
- `toDate`: uses `new Date()` as default parser

### Parameters and Defaults

Parameters for **convertSync** version:
- `toString(typeMap)(valueMap)(value)`
- `toNumber(typeMap)(valueMap)(value)`
- `toBoolean(typeMap)(test)(value)`
- `toDate(typeMap)(parser)(value)`

Parameters for **convertAsync** version:
- `toString(typeMap)(valueMap)(defaultValue)(value)`
- `toNumber(typeMap)(valueMap)(defaultValue)(value)`
- `toBoolean(typeMap)(test)(defaultValue)(value)`
- `toDate(typeMap)(parser)(defaultValue)(value)`

**typeMap**

- a `Map` that maps primitive/prototype names (as returned by `checkSync.whatType`) to result values
- default mappings are provided for `'Undefined'` and `'Null'` primitives as follows:
  + string: `''`
  + number: `NaN`
  + boolean: `false`
  + Date: `new Date(NaN)`

**valueMap** (toString, toNumber)

- a `Map` that maps individual values of any input type to result values
- ignored (set to `null`) by default
- note that type mappings override value mappings

**test** (toBoolean)
- a function that accepts any value and returns `true` or `false`
- defaults to the built-in `Boolean` function, which returns `true` if the value is truthy and false otherwise
- note that type mappings override test return values

**parser** (toDate)
- a function that accepts a string or number and return a `Date`
- defaults to `x => new Date(x)`
- note that type mappings override parser return values

**defaultValue** (convertAsync versions)
- a default value to return if the argument is a promise that rejects
- if not specified, will default to the following: 
  + string: `''`
  + number: `NaN`
  + boolean: `false`
  + Date: `new Date(NaN)`


## Accessing Data Type Names

The **types** module provides a way to access data type names (corresponding to type-checking functions in this package) via dot notation (i.e., string literals). 

### Usage

CommonJS `require`:
```
const { types } = require('data-types');
```

ES6 `import` (using Babel):
```
import { types } from 'data-types';
```

### API

Returns the corresponding type name: 

`types.String \\--> 'String'` 

Returns an array of type names: 

`Object.keys(types)` or `Object.values(types)`
