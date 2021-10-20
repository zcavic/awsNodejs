const { database } = require('./database');
const UserDbAgent = require('./userDbAgent');

const userDbAgent = new UserDbAgent(database);

module.exports = {
    userDbAgent: userDbAgent
};