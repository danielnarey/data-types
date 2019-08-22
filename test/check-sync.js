import test from 'ava';
import checkSync from '../src/check-sync';

// prototype test values
const str = 'apple';
const num = 1.1;
const bool = true;
const symb = Symbol('apple');
const date = new Date('1999-1-1');
const rexp = new RegExp('\\w+');
const func = () => 'apple';
const obj = { a: 'apple', b: 'banana' };
const arr = ['apple', 1.1, true];
const set = new Set(['apple', 'banana']);
const map = new Map([['a', 'apple'], ['b', 'banana']]);
const wset = new WeakSet([{ a: 'apple' }, { b: 'banana' }]);
const wmap = new WeakMap([[{ a: 'apple' }, 'green'], [{ b: 'banana' }, 'yellow']]);
const nll = null;
const undef = {}.a;

// promised prototype test values
const pStr = Promise.resolve(str);
const pNum = Promise.resolve(num);
const pBool = Promise.resolve(bool);
const pSymb = Promise.resolve(symb);
const pDate = Promise.resolve(date);
const pRexp = Promise.resolve(rexp);
const pFunc = Promise.resolve(func);
const pObj = Promise.resolve(obj);
const pArr = Promise.resolve(arr);
const pSet = Promise.resolve(set);
const pMap = Promise.resolve(map);
const pWset = Promise.resolve(wset);
const pWmap = Promise.resolve(wmap);
const pNll = Promise.resolve(nll);
const pUndef = Promise.resolve(undef);

// prototype array test values
const mixedArray = ['apple', 1.1, true];
const strArray = ['apple', 'orange', 'pear'];
const numArray = [1.1, 1.2, 1.3];
const boolArray = [true, true, false];
const dateArray = [new Date('1985-1-4'), new Date('1987-3-10'), new Date('1992-12-17')];
const funcArray = [() => 'apple', n => 1.1 + n, b => !b];
const objArray = [{ fruit: 'apple', color: 'green' }, { fruit: 'banana', color: 'yellow' }];
const emptyArray = [];

// promised prototype array test values
const pMixedArray = Promise.resolve(mixedArray);
const pStrArray = Promise.resolve(strArray);
const pNumArray = Promise.resolve(numArray);
const pBoolArray = Promise.resolve(boolArray);
const pDateArray = Promise.resolve(dateArray);
const pFuncArray = Promise.resolve(funcArray);
const pObjArray = Promise.resolve(objArray);
const pEmptyArray = Promise.resolve(emptyArray);

// typed array test values
const intArr = new Int8Array([-2, -1, 0]);
const uintArr = new Uint8Array([0, 1, 2]);
const floatArr = new Float32Array([0.1, 0.2, 0.3]);
const bigIntArr = BigInt64Array.of(BigInt(19007199254740991), BigInt(9007199254740992), BigInt(9007199254740993));

// promised typed array test values
const pIntArr = Promise.resolve(intArr);
const pUintArr = Promise.resolve(uintArr);
const pFloatArr = Promise.resolve(floatArr);
const pBigIntArr = Promise.resolve(bigIntArr);


// ---TESTS---//

test('isString', (t) => {
  t.true(checkSync.isString(str));
  t.false(checkSync.isString(pStr));

  t.false(checkSync.isString(num));
  t.false(checkSync.isString(pNum));

  // test once
  t.false(checkSync.isString(obj));
  t.false(checkSync.isString(pObj));

  t.false(checkSync.isString(nll));
  t.false(checkSync.isString(pNll));

  t.false(checkSync.isString(undef));
  t.false(checkSync.isString(pUndef));
});


test('isNumber', (t) => {
  t.true(checkSync.isNumber(num));
  t.false(checkSync.isNumber(pNum));

  t.false(checkSync.isNumber(str));
  t.false(checkSync.isNumber(pStr));
});


test('isBoolean', (t) => {
  t.true(checkSync.isBoolean(bool));
  t.false(checkSync.isBoolean(pBool));

  t.false(checkSync.isBoolean(str));
  t.false(checkSync.isBoolean(pStr));
});


test('isSymbol', (t) => {
  t.true(checkSync.isSymbol(symb));
  t.false(checkSync.isSymbol(pSymb));

  t.false(checkSync.isSymbol(str));
  t.false(checkSync.isSymbol(pStr));
});


test('isDate', (t) => {
  t.true(checkSync.isDate(date));
  t.false(checkSync.isDate(pDate));

  t.false(checkSync.isDate(str));
  t.false(checkSync.isDate(pStr));
});


test('isRegExp', (t) => {
  t.true(checkSync.isRegExp(rexp));
  t.false(checkSync.isRegExp(pRexp));

  t.false(checkSync.isRegExp(func));
  t.false(checkSync.isRegExp(pFunc));
});


test('isFunction', (t) => {
  t.true(checkSync.isFunction(func));
  t.false(checkSync.isFunction(pFunc));

  t.false(checkSync.isFunction(obj));
  t.false(checkSync.isFunction(pObj));
});


test('isObject', (t) => {
  t.true(checkSync.isObject(obj));
  t.false(checkSync.isObject(pObj));

  t.false(checkSync.isObject(func));
  t.false(checkSync.isObject(pFunc));
});


test('isArray', (t) => {
  t.true(checkSync.isArray(arr));
  t.false(checkSync.isArray(pArr));

  t.false(checkSync.isArray(obj));
  t.false(checkSync.isArray(pObj));
});


test('isSet', (t) => {
  t.true(checkSync.isSet(set));
  t.false(checkSync.isSet(pSet));

  t.false(checkSync.isSet(arr));
  t.false(checkSync.isSet(pArr));
});


test('isMap', (t) => {
  t.true(checkSync.isMap(map));
  t.false(checkSync.isMap(pMap));

  t.false(checkSync.isMap(arr));
  t.false(checkSync.isMap(pArr));
});


test('isWeakSet', (t) => {
  t.true(checkSync.isWeakSet(wset));
  t.false(checkSync.isWeakSet(pWset));

  t.false(checkSync.isWeakSet(set));
  t.false(checkSync.isWeakSet(pSet));
});


test('isWeakMap', (t) => {
  t.true(checkSync.isWeakMap(wmap));
  t.false(checkSync.isWeakMap(pWmap));

  t.false(checkSync.isWeakMap(map));
  t.false(checkSync.isWeakMap(pMap));
});


test('isStringArray', (t) => {
  t.true(checkSync.isStringArray(strArray));
  t.false(checkSync.isStringArray(pStrArray));

  t.false(checkSync.isStringArray(mixedArray));
  t.false(checkSync.isStringArray(pMixedArray));

  // test once
  t.true(checkSync.isStringArray(emptyArray));
  t.false(checkSync.isStringArray(pEmptyArray));

  t.false(checkSync.isStringArray(strArray.map(x => Promise.resolve(x))));

  t.false(checkSync.isStringArray(obj));
  t.false(checkSync.isStringArray(pObj));
  t.false(checkSync.isStringArray(nll));
  t.false(checkSync.isStringArray(pNll));
  t.false(checkSync.isStringArray(undef));
  t.false(checkSync.isStringArray(pUndef));
});


test('isNumberArray', (t) => {
  t.true(checkSync.isNumberArray(numArray));
  t.false(checkSync.isNumberArray(pNumArray));

  t.false(checkSync.isNumberArray(mixedArray));
  t.false(checkSync.isNumberArray(pMixedArray));
});


test('isBooleanArray', (t) => {
  t.true(checkSync.isBooleanArray(boolArray));
  t.false(checkSync.isBooleanArray(pBoolArray));

  t.false(checkSync.isBooleanArray(mixedArray));
  t.false(checkSync.isBooleanArray(pMixedArray));
});


test('isDateArray', (t) => {
  t.true(checkSync.isDateArray(dateArray));
  t.false(checkSync.isDateArray(pDateArray));

  t.false(checkSync.isDateArray(mixedArray));
  t.false(checkSync.isDateArray(pMixedArray));
});


test('isFunctionArray', (t) => {
  t.true(checkSync.isFunctionArray(funcArray));
  t.false(checkSync.isFunctionArray(pFuncArray));

  t.false(checkSync.isFunctionArray(mixedArray));
  t.false(checkSync.isFunctionArray(pMixedArray));
});


test('isObjectArray', (t) => {
  t.true(checkSync.isObjectArray(objArray));
  t.false(checkSync.isObjectArray(pObjArray));

  t.false(checkSync.isObjectArray(mixedArray));
  t.false(checkSync.isObjectArray(pMixedArray));
});


test('isTypedArray', (t) => {
  t.true(checkSync.isTypedArray(intArr));
  t.false(checkSync.isTypedArray(pIntArr));
  t.true(checkSync.isTypedArray(uintArr));
  t.false(checkSync.isTypedArray(pUintArr));
  t.true(checkSync.isTypedArray(floatArr));
  t.false(checkSync.isTypedArray(pFloatArr));
  t.true(checkSync.isTypedArray(bigIntArr));
  t.false(checkSync.isTypedArray(pBigIntArr));

  t.false(checkSync.isTypedArray(numArray));
  t.false(checkSync.isTypedArray(pNumArray));
});


test('isIntTypedArray', (t) => {
  t.true(checkSync.isIntTypedArray(intArr));
  t.false(checkSync.isIntTypedArray(pIntArr));
  t.true(checkSync.isIntTypedArray(uintArr));
  t.false(checkSync.isIntTypedArray(pUintArr));

  t.false(checkSync.isIntTypedArray(floatArr));
  t.false(checkSync.isIntTypedArray(pFloatArr));
  t.false(checkSync.isIntTypedArray(bigIntArr));
  t.false(checkSync.isIntTypedArray(pBigIntArr));

  t.false(checkSync.isIntTypedArray(numArray));
  t.false(checkSync.isIntTypedArray(pNumArray));
});


test('isUintTypedArray', (t) => {
  t.true(checkSync.isUintTypedArray(uintArr));
  t.false(checkSync.isUintTypedArray(pUintArr));

  t.false(checkSync.isUintTypedArray(intArr));
  t.false(checkSync.isUintTypedArray(pIntArr));
  t.false(checkSync.isUintTypedArray(floatArr));
  t.false(checkSync.isUintTypedArray(pFloatArr));
  t.false(checkSync.isUintTypedArray(bigIntArr));
  t.false(checkSync.isUintTypedArray(pBigIntArr));

  t.false(checkSync.isUintTypedArray(numArray));
  t.false(checkSync.isUintTypedArray(pNumArray));
});


test('isFloatTypedArray', (t) => {
  t.true(checkSync.isFloatTypedArray(floatArr));
  t.false(checkSync.isFloatTypedArray(pFloatArr));

  t.false(checkSync.isFloatTypedArray(intArr));
  t.false(checkSync.isFloatTypedArray(pIntArr));
  t.false(checkSync.isFloatTypedArray(uintArr));
  t.false(checkSync.isFloatTypedArray(pUintArr));
  t.false(checkSync.isFloatTypedArray(bigIntArr));
  t.false(checkSync.isFloatTypedArray(pBigIntArr));

  t.false(checkSync.isFloatTypedArray(numArray));
  t.false(checkSync.isFloatTypedArray(pNumArray));
});


test('isBigIntTypedArray', (t) => {
  t.true(checkSync.isBigIntTypedArray(bigIntArr));
  t.false(checkSync.isBigIntTypedArray(pBigIntArr));

  t.false(checkSync.isBigIntTypedArray(intArr));
  t.false(checkSync.isBigIntTypedArray(pIntArr));
  t.false(checkSync.isBigIntTypedArray(uintArr));
  t.false(checkSync.isBigIntTypedArray(pUintArr));
  t.false(checkSync.isBigIntTypedArray(floatArr));
  t.false(checkSync.isBigIntTypedArray(pFloatArr));

  t.false(checkSync.isBigIntTypedArray(numArray));
  t.false(checkSync.isBigIntTypedArray(pNumArray));
});
