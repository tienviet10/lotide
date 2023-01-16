// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   const res = eqArrays(arr1, arr2);
//   res
//     ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
//     : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
// };

const flatten = (arr) => {
  let res = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      res = res.concat(ele);
    } else {
      res.push(ele);
    }
  }
  return res;
};

// assertArraysEqual(flatten([1, 2, [3, 4], [6]]), [1, 2, 3, 4, 6]);
module.exports = flatten;