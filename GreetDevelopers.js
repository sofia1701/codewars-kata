const greetDevelopers = list => {
    list.forEach(add => add.greeting = `Hi ${add.firstName}, what do you like the most about ${add.language}?`);
    return list;
};

module.exports = greetDevelopers;