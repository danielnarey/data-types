import test from 'ava';
import convertAsync from '../src/convert-async';

// test array
const arr = [
  '',
  'apple',
  'banana',
  '1',
  '2',
  '0.1',
  '0.2',
  'NaN',
  'true',
  'false',
  1,
  2,
  0.1,
  0.2,
  NaN,
  true,
  false,
  null,
  {}.a,
  {},
  () => {},
  Promise.reject(new Error('Fail')),
];

const promisify = array => array.map(x => Promise.resolve(x));


//---TESTS---//

test('toString', (t) => {
  const typeMap = new Map([
    ['Undefined', ''],
    ['Null', ''],
    ['Boolean', '1'],
    ['Function', '!'],
  ]);
  
  const valueMap = new Map([
    ['apple', 'fruit'],
    ['banana', 'fruit'],
    [NaN, '?'],
    [false, '0'],
  ]);
  
  const f = async (x) => await convertAsync.toString(valueMap, typeMap)(x, 'ERROR');
  
  const expected = [
    '',
    'fruit',
    'fruit',
    '1',
    '2',
    '0.1',
    '0.2',
    'NaN',
    'true',
    'false',
    '1',
    '2',
    '0.1',
    '0.2',
    '?',
    '1',
    '1',
    '',
    '',
    '{}',
    '!',
    'ERROR',
  ];
    
  t.deepEqual(promisify(arr).map(f), promisify(expected));
});


test('toNumber', (t) => {
  const typeMap = new Map([
    ['Undefined', NaN],
    ['Null', NaN],
    ['Object', -1],
    ['Function', -1],
  ]);
  
  const valueMap = new Map([
    ['apple', 10],
    ['banana', 20],
    [0.1, 1],
    [0.2, 2],
    [false, -1],
  ]);
  
  const f = async (x) => await convertAsync.toNumber(valueMap, typeMap)(x, -999);
  
  const expected = [
    0,
    10,
    20,
    1,
    2,
    0.1,
    0.2,
    NaN,
    NaN,
    NaN,
    1,
    2,
    1,
    2,
    NaN,
    1,
    -1,
    NaN,
    NaN,
    -1,
    -1,
    -999,
  ];
    
  t.deepEqual(promisify(arr).map(f), promisify(expected));
});


test('toBoolean', (t) => {
  const typeMap = new Map([
    ['Undefined', false],
    ['Null', false],
    ['Object', false],
    ['Function', false],
  ]);
  
  const f = async (x) => await convertAsync.toBoolean(undefined, typeMap)(x, false);
  
  const expected = [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
    
  t.deepEqual(promisify(arr).map(f), promisify(expected));
});


test('toDate', (t) => {
  const typeMap = new Map([
    ['Undefined', new Date(NaN)],
    ['Null', new Date(NaN)],
    ['Object', new Date(NaN)],
    ['Function', new Date(NaN)],
  ]);
  
  const f = async (x) => await convertAsync.toDate(undefined, typeMap)(x, new Date(NaN));
  
  const arr = [
    '1999-1-1',
    '1999-1-3',
    0,
    1,
    null,
    {}.a,
    {},
    () => {},
    Promise.reject(new Error('Fail')),
  ];
  
  const expected = [
    new Date('1999-1-1'),
    new Date('1999-1-3'),
    new Date(0),
    new Date(1),
    new Date(NaN),
    new Date(NaN),
    new Date(NaN),
    new Date(NaN),
    new Date(NaN),
  ];
    
  t.deepEqual(promisify(arr).map(f), promisify(expected));
});
