const ballCollector = detritus => {
  return { weight: detritus.filter(n => n == 58).reduce((a, b) => a + b,0) };
};
  
module.exports = ballCollector;