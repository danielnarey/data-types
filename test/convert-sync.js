import test from 'ava';
import convertSync from '../src/convert-sync';

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
];


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
  
  const f = convertSync.toString(typeMap)(valueMap);
  
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
  ];
    
  t.deepEqual(arr.map(f), expected); 
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
  
  const f = convertSync.toString(typeMap)(valueMap);
  
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
  ];
    
  t.deepEqual(arr.map(f), expected);
});


test('toBoolean', (t) => {
  const typeMap = new Map([
    ['Undefined', false],
    ['Null', false],
    ['Object', false],
    ['Function', false],
  ]);
  
  const f = convertSync.toBoolean(typeMap)();
  
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
  ];
    
  t.deepEqual(arr.map(f), expected);
});


test('toDate', (t) => {
  const typeMap = new Map([
    ['Undefined', new Date(NaN)],
    ['Null', new Date(NaN)],
    ['Object', new Date(NaN)],
    ['Function', new Date(NaN)],
  ]);
  
  const f = convertSync.toDate(typeMap)();
  
  const arr = [
    '1999-1-1',
    '1999-1-3',
    0,
    1,
    null,
    {}.a,
    {},
    () => {},
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
  ];
    
  t.deepEqual(arr.map(f), expected);
});
