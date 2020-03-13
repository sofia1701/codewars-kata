const { removeChar } = require("../src");

describe("removeChar", () => {
    it("removes the first and last characters of a string", () => {
      expect(removeChar("eloquent")).toEqual("loquen"); 
    }); 
    it("removes the first and last characters of a string", () => {
        expect(removeChar("country")).toEqual("ountr"); 
    }); 
    it("removes the first and last characters of a string", () => {
        expect(removeChar("person")).toEqual("erso"); 
    }); 
  });
  