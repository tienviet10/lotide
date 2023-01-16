const assert = require('chai').assert;
const countOnly = require('../countOnly.js');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe("#countOnly", () => {
  it("returns { Jason: 1, Fang: 2 } for when passing in firstNames and {Jason: true, Karima: true, Fang: true, Agouhanna: false,}", () => {
    assert.deepEqual(
      countOnly(firstNames, {
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
      })
      , { Jason: 1, Fang: 2 });
  });
});