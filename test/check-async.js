import test from 'ava';
import checkAsync from '../src/check-async';

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
const pReject = Promise.reject(new Error('Fail'));

// prototype array test values
const mixedArray = ['apple', 1.1, true];
const strArray = ['apple', 'orange', 'pear'];
const numArray = [1.1, 1.2, 1.3];
const boolArray = [true, true, false];
const dateArray = [new Date('1985-1-4'), new Date('1987-3-10'), new Date('1992-12-17')];
const funcArray = [() => 'apple', (n) => 1.1 + n, (b) => !b];
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
const bigIntArr = new BigInt64Array([BigInt(19007199254740991), BigInt(9007199254740992), BigInt(9007199254740993)]);

// promised typed array test values
const pIntArr = Promise.resolve(intArr);
const pUintArr = Promise.resolve(uintArr);
const pFloatArr = Promise.resolve(floatArr);
const pBigIntArr = Promise.resolve(bigIntArr);


//---TESTS---//

test('isString', async (t) => {
  t.true(await checkAsync.isString(str));
  t.true(await checkAsync.isString(pStr));
  
  t.false(await checkAsync.isString(num));
  t.false(await checkAsync.isString(pNum));
  
  // test once
  t.false(await checkAsync.isString(obj));
  t.false(await checkAsync.isString(pObj));
  
  t.false(await checkAsync.isString(nll));
  t.false(await checkAsync.isString(pNll));
  
  t.false(await checkAsync.isString(undef));
  t.false(await checkAsync.isString(pUndef));
  
  t.false(await checkAsync.isString(pReject));
});


test('isNumber', async (t) => {
  t.true(await checkAsync.isNumber(num));
  t.true(await checkAsync.isNumber(pNum));
  
  t.false(await checkAsync.isNumber(str));
  t.false(await checkAsync.isNumber(pStr));
});


test('isBoolean', async (t) => {
  t.true(await checkAsync.isBoolean(bool));
  t.true(await checkAsync.isBoolean(pBool));
  
  t.false(await checkAsync.isBoolean(str));
  t.false(await checkAsync.isBoolean(pStr));
});


test('isSymbol', async (t) => {
  t.true(await checkAsync.isSymbol(symb));
  t.true(await checkAsync.isSymbol(pSymb));
  
  t.false(await checkAsync.isSymbol(str));
  t.false(await checkAsync.isSymbol(pStr));
});


test('isDate', async (t) => {
  t.true(await checkAsync.isDate(date));
  t.true(await checkAsync.isDate(pDate));
  
  t.false(await checkAsync.isDate(str));
  t.false(await checkAsync.isDate(pStr));
});


test('isRegExp', async (t) => {
  t.true(await checkAsync.isRegExp(rexp));
  t.true(await checkAsync.isRegExp(pRexp));
  
  t.false(await checkAsync.isRegExp(func));
  t.false(await checkAsync.isRegExp(pFunc));
});


test('isFunction', async (t) => {
  t.true(await checkAsync.isFunction(func));
  t.true(await checkAsync.isFunction(pFunc));
  
  t.false(await checkAsync.isFunction(obj));
  t.false(await checkAsync.isFunction(pObj));
});


test('isObject', async (t) => {
  t.true(await checkAsync.isObject(obj));
  t.true(await checkAsync.isObject(pObj));
  
  t.false(await checkAsync.isObject(func));
  t.false(await checkAsync.isObject(pFunc));
});


test('isArray', async (t) => {
  t.true(await checkAsync.isArray(arr));
  t.true(await checkAsync.isArray(pArr));
  
  t.false(await checkAsync.isArray(obj));
  t.false(await checkAsync.isArray(pObj));
});


test('isSet', async (t) => {
  t.true(await checkAsync.isSet(set));
  t.true(await checkAsync.isSet(pSet));
  
  t.false(await checkAsync.isSet(arr));
  t.false(await checkAsync.isSet(pArr));
});


test('isMap', async (t) => {
  t.true(await checkAsync.isMap(map));
  t.true(await checkAsync.isMap(pMap));
  
  t.false(await checkAsync.isMap(arr));
  t.false(await checkAsync.isMap(pArr));
});


test('isWeakSet', async (t) => {
  t.true(await checkAsync.isWeakSet(wset));
  t.true(await checkAsync.isWeakSet(pWset));
  
  t.false(await checkAsync.isWeakSet(set));
  t.false(await checkAsync.isWeakSet(pSet));
});


test('isWeakMap', async (t) => {
  t.true(await checkAsync.isWeakMap(wmap));
  t.true(await checkAsync.isWeakMap(pWmap));
  
  t.false(await checkAsync.isWeakMap(map));
  t.false(await checkAsync.isWeakMap(pMap));
});


test('isStringArray', async (t) => {
  t.true(await checkAsync.isStringArray(strArray));
  t.true(await checkAsync.isStringArray(pStrArray));
  
  t.false(await checkAsync.isStringArray(mixedArray));
  t.false(await checkAsync.isStringArray(pMixedArray));
  
  // test once
  t.true(await checkAsync.isStringArray(emptyArray));
  t.true(await checkAsync.isStringArray(pEmptyArray));
  
  t.false(await checkAsync.isStringArray(strArray.map(x => Promise.resolve(x))));
  
  t.false(await checkAsync.isStringArray(obj));
  t.false(await checkAsync.isStringArray(pObj));
  t.false(await checkAsync.isStringArray(nll));
  t.false(await checkAsync.isStringArray(pNll));
  t.false(await checkAsync.isStringArray(undef));
  t.false(await checkAsync.isStringArray(pUndef));
  t.false(await checkAsync.isStringArray(pReject));
});


test('isNumberArray', async (t) => {
  t.true(await checkAsync.isNumberArray(numArray));
  t.true(await checkAsync.isNumberArray(pNumArray));
  
  t.false(await checkAsync.isNumberArray(mixedArray));
  t.false(await checkAsync.isNumberArray(pMixedArray));
});


test('isBooleanArray', async (t) => {
  t.true(await checkAsync.isBooleanArray(boolArray));
  t.true(await checkAsync.isBooleanArray(pBoolArray));
  
  t.false(await checkAsync.isBooleanArray(mixedArray));
  t.false(await checkAsync.isBooleanArray(pMixedArray));
});


test('isDateArray', async (t) => {
  t.true(await checkAsync.isDateArray(dateArray));
  t.true(await checkAsync.isDateArray(pDateArray));
  
  t.false(await checkAsync.isDateArray(mixedArray));
  t.false(await checkAsync.isDateArray(pMixedArray));
});


test('isFunctionArray', async (t) => {
  t.true(await checkAsync.isFunctionArray(funcArray));
  t.true(await checkAsync.isFunctionArray(pFuncArray));

  t.false(await checkAsync.isFunctionArray(mixedArray));
  t.false(await checkAsync.isFunctionArray(pMixedArray));
});


test('isObjectArray', async (t) => {
  t.true(await checkAsync.isObjectArray(objArray));
  t.true(await checkAsync.isObjectArray(pObjArray));

  t.false(await checkAsync.isObjectArray(mixedArray));
  t.false(await checkAsync.isObjectArray(pMixedArray));
});


test('isTypedArray', async (t) => {
  t.true(await checkAsync.isTypedArray(intArr));
  t.true(await checkAsync.isTypedArray(pIntArr));
  t.true(await checkAsync.isTypedArray(uintArr));
  t.true(await checkAsync.isTypedArray(pUintArr));
  t.true(await checkAsync.isTypedArray(floatArr));
  t.true(await checkAsync.isTypedArray(pFloatArr));
  t.true(await checkAsync.isTypedArray(bigIntArr));
  t.true(await checkAsync.isTypedArray(pBigIntArr));

  t.false(await checkAsync.isTypedArray(numArray));
  t.false(await checkAsync.isTypedArray(pNumArray));
});


test('isIntTypedArray', async (t) => {
  t.true(await checkAsync.isIntTypedArray(intArr));
  t.true(await checkAsync.isIntTypedArray(pIntArr));
  t.true(await checkAsync.isIntTypedArray(uintArr));
  t.true(await checkAsync.isIntTypedArray(pUintArr));
  
  t.false(await checkAsync.isIntTypedArray(floatArr));
  t.false(await checkAsync.isIntTypedArray(pFloatArr));
  t.false(await checkAsync.isIntTypedArray(bigIntArr));
  t.false(await checkAsync.isIntTypedArray(pBigIntArr));

  t.false(await checkAsync.isIntTypedArray(numArray));
  t.false(await checkAsync.isIntTypedArray(pNumArray));
});


test('isUintTypedArray', async (t) => {
  t.true(await checkAsync.isUintTypedArray(uintArr));
  t.true(await checkAsync.isUintTypedArray(pUintArr));
  
  t.false(await checkAsync.isUintTypedArray(intArr));
  t.false(await checkAsync.isUintTypedArray(pIntArr));
  t.false(await checkAsync.isUintTypedArray(floatArr));
  t.false(await checkAsync.isUintTypedArray(pFloatArr));
  t.false(await checkAsync.isUintTypedArray(bigIntArr));
  t.false(await checkAsync.isUintTypedArray(pBigIntArr));

  t.false(await checkAsync.isUintTypedArray(numArray));
  t.false(await checkAsync.isUintTypedArray(pNumArray));
});


test('isFloatTypedArray', async (t) => {
  t.true(await checkAsync.isFloatTypedArray(floatArr));
  t.true(await checkAsync.isFloatTypedArray(pFloatArr));
  
  t.false(await checkAsync.isFloatTypedArray(intArr));
  t.false(await checkAsync.isFloatTypedArray(pIntArr));
  t.false(await checkAsync.isFloatTypedArray(uintArr));
  t.false(await checkAsync.isFloatTypedArray(pUintArr));
  t.false(await checkAsync.isFloatTypedArray(bigIntArr));
  t.false(await checkAsync.isFloatTypedArray(pBigIntArr));

  t.false(await checkAsync.isFloatTypedArray(numArray));
  t.false(await checkAsync.isFloatTypedArray(pNumArray));
});


test('isBigIntTypedArray', async (t) => {
  t.true(await checkAsync.isBigIntTypedArray(bigIntArr));
  t.true(await checkAsync.isBigIntTypedArray(pBigIntArr));
  
  t.false(await checkAsync.isBigIntTypedArray(intArr));
  t.false(await checkAsync.isBigIntTypedArray(pIntArr));
  t.false(await checkAsync.isBigIntTypedArray(uintArr));
  t.false(await checkAsync.isBigIntTypedArray(pUintArr));
  t.false(await checkAsync.isBigIntTypedArray(floatArr));
  t.false(await checkAsync.isBigIntTypedArray(pFloatArr));

  t.false(await checkAsync.isBigIntTypedArray(numArray));
  t.false(await checkAsync.isBigIntTypedArray(pNumArray));
});
