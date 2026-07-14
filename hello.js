#!/usr/bin/env node
/**
 * Simple hello world JavaScript deliverable for Talos evaluation testing.
 */

function greet(name = "World") {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet());
}

module.exports = { greet };
