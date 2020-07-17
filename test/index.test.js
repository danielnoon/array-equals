const arrayEquals = require('../lib/common').default;

test('compares two equal arrays', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 4, 5];

  expect(arrayEquals(arr1, arr2)).toBe(true);
});

test('compares two arrays of unequal length', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 4];

  expect(arrayEquals(arr1, arr2)).toBe(false);
});

test('compares two arrays of unequal values', () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 1, 2, 4];

  expect(arrayEquals(arr1, arr2)).toBe(false);
});

test('compares two arrays of equal objects', () => {
  const ob1 = { hello: 'world' };
  const ob2 = {};

  const arr1 = [ob1, ob2, ob2, ob1];
  const arr2 = [ob1, ob2, ob2, ob1];

  expect(arrayEquals(arr1, arr2)).toBe(true);
});

test('compares two arrays of unequal objects', () => {
  const ob1 = { hello: 'world' };
  const ob2 = {};

  const arr1 = [ob1, ob2, ob1, ob1];
  const arr2 = [ob1, ob2, ob2, ob1];

  expect(arrayEquals(arr1, arr2)).toBe(false);
});
