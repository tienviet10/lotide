const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

describe("#head", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns Lighthouse for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns Labs for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});