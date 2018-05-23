const trimmer = require("./");
const assert = require("assert");

assert.equal(trimmer.trim("  test  "), "test");
assert.equal(trimmer.trimLeft("  test  "), "test  ");
assert.equal(trimmer.trimRight("  test  "), "  test");

assert.equal(trimmer.trim("test", "t"), "es");
assert.equal(trimmer.trim("testing", "ing"), "test");
assert.equal(trimmer.trimLeft("test", "t"), "est");
assert.equal(trimmer.trimRight("test", "t"), "tes");

// Optionally, you could apply these methods to String.prototype.
trimmer.applyTo(String.prototype);

assert.equal(" test ".trim(" t"), "es");

console.log("#### OK ####");