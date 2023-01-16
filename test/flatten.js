const assert = require('chai').assert;
const flatten = require('../flatten.js');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 6] if [1, 2, [3, 4], [6]] is flatten", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], [6]]), [1, 2, 3, 4, 6]);
  });
});