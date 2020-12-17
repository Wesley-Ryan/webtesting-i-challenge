const enhancer = require("./enhancer.js");

describe("Sanity check", () => {
  it("works", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("Verify Item Requirements", () => {
  const itemCreator = enhancer.Item;
  let item;
  beforeEach(() => {
    item = new itemCreator("milk");
  });
  it("Item can be created and named", () => {
    expect(item.name).toBe("milk");
  });

  it("Item has name, durability, enhancement", () => {
    expect(item).toMatchObject({ name: "milk", durability: 0, enhancement: 0 });
  });

  it("The item's enhancement it's a number from 0 to 20", () => {
    expect(item.enhancement).toBeLessThanOrEqual(20);
  });
  it("The item's durability it's a number from 0 to 100", () => {
    expect(item.durability).toBeLessThanOrEqual(100);
  });
});

describe("When enhancement succeeds", () => {
  const itemCreator = enhancer.Item;
  let item;
  beforeEach(() => {
    item = new itemCreator("milk");
  });
  it("The item's enhancement increases by 1", () => {
    enhancer.success(item);
    expect(item.enhancement).toBe(1);
  });
  it("The item's enhancement does not surpass 20", () => {
    item.enhancement = 20;
    enhancer.success(item);
    expect(item.enhancement).toBe(20);
  });
});
//

// When enhancement fails

// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17)
