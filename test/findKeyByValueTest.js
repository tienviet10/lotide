const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue.js');

describe("#findKeyByValue", () => {
  it("returns drama if trying to find value 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(
      {
        "sci_fi": "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama: "The Wire",
      },
      "The Wire"
    ), "drama");
  });
});