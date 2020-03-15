const { XO } = require("../src");

describe("XO", () => {
    it("Check to see if a string has the same amount of 'x's and 'o's", () => {
      expect(XO('xo')).toEqual(true); 
    
      expect(XO('xxOo')).toEqual(true); 
    
      expect(XO('xxxm')).toEqual(false); 
    
      expect(XO('Oo')).toEqual(false); 
     
      expect(XO('ooom')).toEqual(false); 
    }); 
});

