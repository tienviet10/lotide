const words = ["ground", "control", "to", "major", "tom"];
const words2 = [];
const words3 = [1, 4, 5, 6, 7, 8];

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const res = eqArrays(arr1, arr2);
  res
    ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words2, (word) => word[0]);
assertArraysEqual(results2, []);

const results3 = map(words3, (num) => num > 3 && num);
assertArraysEqual(results3, [false, 4, 5, 6, 7, 8]);
