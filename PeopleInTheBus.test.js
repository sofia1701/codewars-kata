const { number } = require("../src");

describe("number", () => {
    it("return number of people who are still in the bus after the last bus station (after the last array)", () => {
      expect(number([[10,0],[3,5],[5,8]])).toEqual(5);
    }); 
    it("return number of people who are still in the bus after the last bus station (after the last array)", () => {
        expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toEqual(17);
    }); 
    it("return number of people who are still in the bus after the last bus station (after the last array)", () => {
        expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
    }); 
  });



