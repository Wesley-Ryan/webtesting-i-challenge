class Item {
  constructor(name) {
    this.name = name;
    this.durability = 0;
    this.enhancement = 0;
  }
}

module.exports = {
  Item,
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) item.enhancement++;
  return {
    ...item,
  };
}

function fail(item) {
  // a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
  return { ...item };
}

function repair(item) {
  // a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
  return { ...item };
}

function get(item) {
  // a get() method for use when working on the stretch problem.
  return { ...item };
}
