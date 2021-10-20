class UserController {

    constructor(userService) {
        this.userService = userService;
    }

    async getUser(req, res, next) {
        try {
            // collect necessary data and create the view model
            const dbUser = await this.userService.getExistingUser(req.query.username);
            let user = dbUser[0];
            // render the view with view model
            res.render('user', { user });
            // call next middleware
            next();
        } catch (e) {
            console.log(e);
            next(e);
        }
    }

    async postUser(req, res, next) {
        try {
            // collect necessary data and create the view model
            const user = await this.userService.createNewUser(req.userId);
            // render the view with view model
            res.render('index', { user });
            // call next middleware
            next();
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

module.exports = UserController;