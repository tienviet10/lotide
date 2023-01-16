/* eslint-disable */

// const assertEqual = (actual, expected) => {
//   actual === expected
//     ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = (data, title) => {
  for (let genre of Object.keys(data)) {
    if (data[genre] === title) return genre;
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
