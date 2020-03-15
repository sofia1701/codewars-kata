const XO = str => {
   const x = str.replace(/[^x]/gi, "").length;
   const o = str.replace(/[^o]/gi, "").length;

   return x === o;
};

module.exports = XO;