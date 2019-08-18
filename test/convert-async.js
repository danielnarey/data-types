import test from 'ava';
import convertAsync from '../src/convert-async';


// rejected promise test value
const pReject = Promise.reject(new Error('Fail'));


//---TESTS---//

test('toString', async (t) => {
  const typeMap = new Map([
    ['Undefined', ''],
    ['Null', ''],
    ['Boolean', '1'],
    ['Function', '!'],
  ]);
  
  const valueMap = new Map([
    ['apple', 'fruit'],
    [NaN, '?'],
  ]);
  
  const f = x => convertAsync.toString(typeMap)(valueMap)('ERROR')(Promise.resolve(x));
    
  t.is(await f('apple'), 'fruit');
  t.is(await f('banana'), 'banana');
  t.is(await f(1), '1');
  t.is(await f(NaN), '?');
  t.is(await f({}.a), '');
  t.is(await f(false), '1');
  t.is(await f(() => {}), '!');
  t.is(await f(pReject), 'ERROR');
});


test('toNumber', (t) => {
  const typeMap = new Map([
    ['Undefined', NaN],
    ['Null', NaN],
    ['Function', -1],
  ]);
  
  const valueMap = new Map([
    ['apple', 10],
    [0.1, 1.1],
    [false, -1],
  ]);
  
  const f = x => convertAsync.toNumber(typeMap)(valueMap)(-999)(Promise.resolve(x));
  
  t.is(await f('apple'), 10);
  t.is(await f('banana'), NaN);
  t.is(await f('1'), 1);
  t.is(await f(0.1), 1.1);
  t.is(await f({}.a), NaN);
  t.is(await f(false), -1);
  t.is(await f(() => {}), -1);
  t.is(await f(pReject), -999);
});


test('toBoolean', (t) => {
  const typeMap = new Map([
    ['Undefined', false],
    ['Null', false],
    ['Object', false],
    ['Function', false],
  ]);
  
  const f = x => convertAsync.toBoolean(typeMap)()()(Promise.resolve(x));
  
  t.is(await f('apple'), true);
  t.is(await f(0), false);
  t.is(await f(0.1, true);
  t.is(await f({}.a), false);
  t.is(await f({}), false);
  t.is(await f(() => {}), false);
  t.is(await f(pReject), false);
});


test('toDate', (t) => {
  const typeMap = new Map([
    ['Undefined', new Date(NaN)],
    ['Null', new Date(NaN)],
    ['Object', new Date(NaN)],
    ['Function', new Date(NaN)],
  ]);
  
  const f = x => convertAsync.toDate(typeMap)()()(Promise.resolve(x));
  
  t.is(await f('1999-1-1'), new Date('1999-1-1'));
  t.is(await f(1), new Date(1));
  t.is(await f(null), new Date(NaN));
  t.is(await f({}.a), new Date(NaN));
  t.is(await f({}), new Date(NaN));
  t.is(await f(() => {}), new Date(NaN));
  t.is(await f(pReject), new Date(NaN));
});
