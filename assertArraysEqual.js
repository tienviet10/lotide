const assertArraysEqual = (arr1, arr2) => {
  let res = true;
  if (arr1.length !== arr2.length) res = false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      res = false;
      break;
    }
  }
  res
    ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1, 2], [1, 2]);
