const countDevelopers = list => {
  return list.filter(({continent,language}) => 
  continent === 'Europe' && language === 'JavaScript').length;
};

module.exports = countDevelopers;