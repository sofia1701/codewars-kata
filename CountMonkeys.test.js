const { monkeyCount } = require("../src");

describe("monkeyCount", () => {
  it("populate an array with all numbers up to and including that number, but excluding zero", () => {
    expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5]);
    expect(monkeyCount(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(monkeyCount(20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  }); 
});

