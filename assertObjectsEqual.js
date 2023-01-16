const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const check = eqObjects(actual, expected);

  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  check
    ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

module.exports = assertObjectsEqual;