const assert = require('chai').assert;
const letterPositions = require('../letterPositions.js');

describe("#letterPositions", () => {
  it("returns { H: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for Hel", () => {
    assert.deepEqual(letterPositions("Hello"), { H: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
});