/**
 * Tests for hello world JavaScript deliverable.
 */
const assert = require('assert');
const { greet } = require('./hello');

// Test default greeting
try {
  assert.strictEqual(greet(), "Hello, World!");
  console.log("✓ Default greeting test passed");
} catch (err) {
  console.error("✗ Default greeting test failed", err);
  process.exit(1);
}

// Test custom greeting
try {
  assert.strictEqual(greet("Talos"), "Hello, Talos!");
  console.log("✓ Custom greeting test passed");
} catch (err) {
  console.error("✗ Custom greeting test failed", err);
  process.exit(1);
}

console.log("All tests passed successfully!");
process.exit(0);
