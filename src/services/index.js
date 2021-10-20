
const UserService = require('./userService');
const { userDbAgent } = require('../databaseAgents/index');

const userService = new UserService(userDbAgent);

module.exports = { 
    userService: userService 
};