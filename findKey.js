// const assertEqual = (actual, expected) => {
//   actual === expected
//     ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const findKey = (data, cond) => {
  for (let name in data) {
    if (cond(data[name])) return name;
  }
  return undefined;
};

// const result = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 5
// );

// assertEqual(result, undefined);

module.exports = findKey;