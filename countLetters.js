const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (str) => {
  const res = {};

  for (let letter of str) {
    res[letter] = res[letter] ? res[letter] + 1 : 1;
  }
  return res;
};

assertEqual(countLetters("lighthouse in the house")["i"], 2);
