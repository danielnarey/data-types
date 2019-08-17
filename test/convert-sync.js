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
  
  const f = convertSync.toString(valueMap, typeMap);
  
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
  
  const f = convertSync.toNumber(valueMap, typeMap);
  
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
    0.1,
    0.2,
    NaN,
    1,
    0,
    NaN,
    NaN,
    -1,
    -1,
  ];
    
  t.deepEqual(arr.map(f), expected);
});
