const enhancer = require("./enhancer.js");
// test away!

// Tests

// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

// When enhancement succeeds

// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

// When enhancement fails

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
