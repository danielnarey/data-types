import test from 'ava';
import types from '../src/types';

test('types', (t) => {
  const keys = Object.keys(types);
  
  t.true(keys.every(k => k === types[k]));
});