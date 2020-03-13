const monkeyCount = n => {
   const monkeyArr = [];
   for (i = 1 ; i <= n ; i++)monkeyArr.push(i);
   return monkeyArr;
};

module.exports = monkeyCount;