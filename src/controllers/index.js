const { userService } = require('../services/index.js');
const UserController = require('./userController');

const userController = new UserController(userService)

module.exports = {
    userController: userController
};