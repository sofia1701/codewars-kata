const { ballCollector } = require("../src");


describe("ballCollector", () => {
    it("returns the combined weight of all tennis balls in the array", () => {
      expect(ballCollector([58, 68, 62, 69, 58])).toEqual({ weight: 116 });
    }); 
    it("returns the combined weight of all tennis balls in the array", () => {
      expect(ballCollector([58])).toEqual({ weight: 58 });
    }); 
    it("returns the combined weight of all tennis balls in the array", () => {
      expect(ballCollector([68, 62, 69])).toEqual({ weight: 0 });
    }); 
});