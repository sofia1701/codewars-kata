const isRubyComing = list => {
  const ruby = x => x.language === 'Ruby';
  return list.some(ruby);
};

module.exports = isRubyComing;