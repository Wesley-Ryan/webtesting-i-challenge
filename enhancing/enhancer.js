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
  if (item.enhancement < 20) item.enhancement += 1;
  return {
    ...item,
  };
}

function fail(item) {
  if (item.enhancement > 16) {
    item.enhancement -= 1;
    item.durability -= 10;
  } else if (item.enhancement >= 15) {
    item.durability -= 10;
  } else {
    item.durability -= 5;
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  // a get() method for use when working on the stretch problem.
  return { ...item };
}
