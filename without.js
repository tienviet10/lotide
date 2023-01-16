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


const without = (arr1, arr2) => {
  let res = [];
  for (let ele1 of arr1) {
    if (!arr2.includes(ele1)) res.push(ele1);
  }
  return res;
};

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;