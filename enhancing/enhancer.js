module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.

// a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.

// a get() method for use when working on the stretch problem.

// The following sections list information provided by the client about items and the game's enhancing system.
