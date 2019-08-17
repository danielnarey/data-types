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

test('toString', (t) => {
  const valueMap = new Map([
    ['apple', 'fruit'],
    ['banana', 'fruit'],
    [NaN, '?'],
    [false, '0'],
  ]);
  
  const typeMap = new Map([
    ['Undefined', ''],
    ['Null', ''],
    ['Boolean', '1'],
    ['Function', '!'],
  ]);
  
  const f = convertSync.toString(valueMap, typeMap);
    
  t.deepEqual(arr.map(f), [
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
    '0',
    '',
    '',
    '{}',
    '!',
  ]);
});
