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
  t.true(await checkSync.isString(str));
  t.false(await checkSync.isString(pStr));
  
  t.false(await checkSync.isString(num));
  t.false(await checkSync.isString(pNum));
  
  // test once
  t.false(await checkSync.isString(obj));
  t.false(await checkSync.isString(pObj));
  
  t.false(await checkSync.isString(nll));
  t.false(await checkSync.isString(pNll));
  
  t.false(await checkSync.isString(undef));
  t.false(await checkSync.isString(pUndef));
  
  t.false(await checkSync.isString(pReject));
});


test('isNumber', async (t) => {
  t.true(await checkSync.isNumber(num));
  t.false(await checkSync.isNumber(pNum));
  
  t.false(await checkSync.isNumber(str));
  t.false(await checkSync.isNumber(pStr));
});


test('isBoolean', async (t) => {
  t.true(await checkSync.isBoolean(bool));
  t.false(await checkSync.isBoolean(pBool));
  
  t.false(await checkSync.isBoolean(str));
  t.false(await checkSync.isBoolean(pStr));
});


test('isSymbol', async (t) => {
  t.true(await checkSync.isSymbol(symb));
  t.false(await checkSync.isSymbol(pSymb));
  
  t.false(await checkSync.isSymbol(str));
  t.false(await checkSync.isSymbol(pStr));
});


test('isDate', async (t) => {
  t.true(await checkSync.isDate(date));
  t.false(await checkSync.isDate(pDate));
  
  t.false(await checkSync.isDate(str));
  t.false(await checkSync.isDate(pStr));
});


test('isRegExp', async (t) => {
  t.true(await checkSync.isRegExp(rexp));
  t.false(await checkSync.isRegExp(pRexp));
  
  t.false(await checkSync.isRegExp(func));
  t.false(await checkSync.isRegExp(pFunc));
});


test('isFunction', async (t) => {
  t.true(await checkSync.isFunction(func));
  t.false(await checkSync.isFunction(pFunc));
  
  t.false(await checkSync.isFunction(obj));
  t.false(await checkSync.isFunction(pObj));
});


test('isObject', async (t) => {
  t.true(await checkSync.isObject(obj));
  t.false(await checkSync.isObject(pObj));
  
  t.false(await checkSync.isObject(func));
  t.false(await checkSync.isObject(pFunc));
});


test('isArray', async (t) => {
  t.true(await checkSync.isArray(arr));
  t.false(await checkSync.isArray(pArr));
  
  t.false(await checkSync.isArray(obj));
  t.false(await checkSync.isArray(pObj));
});


test('isSet', async (t) => {
  t.true(await checkSync.isSet(set));
  t.false(await checkSync.isSet(set));
  
  t.false(await checkSync.isSet(arr));
  t.false(await checkSync.isSet(pArr));
});


test('isMap', async (t) => {
  t.true(await checkSync.isMap(map));
  t.false(await checkSync.isMap(map));
  
  t.false(await checkSync.isMap(arr));
  t.false(await checkSync.isMap(pArr));
});


test('isWeakSet', async (t) => {
  t.true(await checkSync.isWeakSet(wset));
  t.false(await checkSync.isWeakSet(wset));
  
  t.false(await checkSync.isWeakSet(set));
  t.false(await checkSync.isWeakSet(pSet));
});


test('isWeakMap', async (t) => {
  t.true(await checkSync.isWeakMap(wmap));
  t.false(await checkSync.isWeakMap(pWmap));
  
  t.false(await checkSync.isWeakMap(map));
  t.false(await checkSync.isWeakMap(pMap));
});


test('isStringArray', async (t) => {
  t.true(await checkSync.isStringArray(strArray));
  t.false(await checkSync.isStringArray(pStrArray));
  
  t.false(await checkSync.isStringArray(mixedArray));
  t.false(await checkSync.isStringArray(pMixedArray));
  
  // test once
  t.true(await checkSync.isStringArray(emptyArray));
  t.false(await checkSync.isStringArray(pEmptyArray));
  
  t.false(await checkSync.isStringArray(strArray.map(x => Promise.resolve(x))));
  
  t.false(await checkSync.isStringArray(obj));
  t.false(await checkSync.isStringArray(pObj));
  t.false(await checkSync.isStringArray(nll));
  t.false(await checkSync.isStringArray(pNll));
  t.false(await checkSync.isStringArray(undef));
  t.false(await checkSync.isStringArray(pUndef));
  t.false(await checkSync.isStringArray(pReject));
});


test('isNumberArray', async (t) => {
  t.true(await checkSync.isNumberArray(numArray));
  t.false(await checkSync.isNumberArray(pNumArray));
  
  t.false(await checkSync.isNumberArray(mixedArray));
  t.false(await checkSync.isNumberArray(pMixedArray));
});


test('isBooleanArray', async (t) => {
  t.true(await checkSync.isBooleanArray(boolArray));
  t.false(await checkSync.isBooleanArray(pBoolArray));
  
  t.false(await checkSync.isBooleanArray(mixedArray));
  t.false(await checkSync.isBooleanArray(pMixedArray));
});


test('isDateArray', async (t) => {
  t.true(await checkSync.isDateArray(dateArray));
  t.false(await checkSync.isDateArray(pDateArray));
  
  t.false(await checkSync.isDateArray(mixedArray));
  t.false(await checkSync.isDateArray(pMixedArray));
});


test('isFunctionArray', async (t) => {
  t.true(await checkSync.isFunctionArray(funcArray));
  t.false(await checkSync.isFunctionArray(pFuncArray));

  t.false(await checkSync.isFunctionArray(mixedArray));
  t.false(await checkSync.isFunctionArray(pMixedArray));
});


test('isObjectArray', async (t) => {
  t.true(await checkSync.isObjectArray(objArray));
  t.false(await checkSync.isObjectArray(pObjArray));

  t.false(await checkSync.isObjectArray(mixedArray));
  t.false(await checkSync.isObjectArray(pMixedArray));
});


test('isTypedArray', async (t) => {
  t.true(await checkSync.isTypedArray(intArr));
  t.false(await checkSync.isTypedArray(pIntArr));
  t.true(await checkSync.isTypedArray(uintArr));
  t.false(await checkSync.isTypedArray(pUintArr));
  t.true(await checkSync.isTypedArray(floatArr));
  t.false(await checkSync.isTypedArray(pFloatArr));
  t.true(await checkSync.isTypedArray(bigIntArr));
  t.false(await checkSync.isTypedArray(pBigIntArr));

  t.false(await checkSync.isTypedArray(numArray));
  t.false(await checkSync.isTypedArray(pNumArray));
});


test('isIntTypedArray', async (t) => {
  t.true(await checkSync.isIntTypedArray(intArr));
  t.false(await checkSync.isIntTypedArray(pIntArr));
  t.true(await checkSync.isIntTypedArray(uintArr));
  t.false(await checkSync.isIntTypedArray(pUintArr));
  
  t.false(await checkSync.isIntTypedArray(floatArr));
  t.false(await checkSync.isIntTypedArray(pFloatArr));
  t.false(await checkSync.isIntTypedArray(bigIntArr));
  t.false(await checkSync.isIntTypedArray(pBigIntArr));

  t.false(await checkSync.isIntTypedArray(numArray));
  t.false(await checkSync.isIntTypedArray(pNumArray));
});


test('isUintTypedArray', async (t) => {
  t.true(await checkSync.isUintTypedArray(uintArr));
  t.false(await checkSync.isUintTypedArray(pUintArr));
  
  t.false(await checkSync.isUintTypedArray(intArr));
  t.false(await checkSync.isUintTypedArray(pIntArr));
  t.false(await checkSync.isUintTypedArray(floatArr));
  t.false(await checkSync.isUintTypedArray(pFloatArr));
  t.false(await checkSync.isUintTypedArray(bigIntArr));
  t.false(await checkSync.isUintTypedArray(pBigIntArr));

  t.false(await checkSync.isUintTypedArray(numArray));
  t.false(await checkSync.isUintTypedArray(pNumArray));
});


test('isFloatTypedArray', async (t) => {
  t.true(await checkSync.isFloatTypedArray(floatArr));
  t.false(await checkSync.isFloatTypedArray(pFloatArr));
  
  t.false(await checkSync.isFloatTypedArray(intArr));
  t.false(await checkSync.isFloatTypedArray(pIntArr));
  t.false(await checkSync.isFloatTypedArray(uintArr));
  t.false(await checkSync.isFloatTypedArray(pUintArr));
  t.false(await checkSync.isFloatTypedArray(bigIntArr));
  t.false(await checkSync.isFloatTypedArray(pBigIntArr));

  t.false(await checkSync.isFloatTypedArray(numArray));
  t.false(await checkSync.isFloatTypedArray(pNumArray));
});


test('isBigIntTypedArray', async (t) => {
  t.true(await checkSync.isBigIntTypedArray(bigIntArr));
  t.false(await checkSync.isBigIntTypedArray(pBigIntArr));
  
  t.false(await checkSync.isBigIntTypedArray(intArr));
  t.false(await checkSync.isBigIntTypedArray(pIntArr));
  t.false(await checkSync.isBigIntTypedArray(uintArr));
  t.false(await checkSync.isBigIntTypedArray(pUintArr));
  t.false(await checkSync.isBigIntTypedArray(floatArr));
  t.false(await checkSync.isBigIntTypedArray(pFloatArr));

  t.false(await checkSync.isBigIntTypedArray(numArray));
  t.false(await checkSync.isBigIntTypedArray(pNumArray));
});
