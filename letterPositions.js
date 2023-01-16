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

const letterPositions = (sentence) => {
  const results = {};

  for (let index in sentence) {
    if (sentence[index] === " ") continue;
    // results[sentence[index]] = results[sentence[index]]
    //   ? results[sentence[index]].concat([Number(index)])
    //   : [Number(index)];
    results[sentence[index]] = results[sentence[index]]
      ? [...results[sentence[index]], Number(index)]
      : [Number(index)];
  }

  return results;
};

// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;
