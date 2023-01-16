const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe("#eqObjects", () => {
  it("returns true if the objects are equaled", () => {
    assert.strictEqual(eqObjects(
      { colors: ["red", "blue"], size: "medium" },
      {
        size: "medium",
        colors: ["red", "blue"],
      }
    ), true);
  });
});