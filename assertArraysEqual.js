const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  const res = eqArrays(arr1, arr2);
  res
    ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

// assertArraysEqual([1, 2], [1, 2]);
module.exports = assertArraysEqual;