
const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe("#eqArrays", () => {
  it("returns true if the arrays are equaled", () => {
    assert.strictEqual(eqArrays(
      [1, 2, 3],
      [1, 2, 3]
    ), true);
  });
});
