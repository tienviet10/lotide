const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (str) => {
  let res = {};

  for (let c of str) {
    res[c] = res[c] ? res[c] + 1 : 1;
  }
  return res;
};

assertEqual(countLetters("lighthouse in the house")["i"], 2);
