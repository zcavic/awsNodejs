class UserService {

    constructor(userDb) {
        this.userDb = userDb;
    }

    async createNewUser(user) {
        // validate data
        if (!user) {
            throw new Error('You must supply a user id.');
        }
        // use case
        let successful = false;
        let userFromDb = await this.userDb.findByUsername(user.id);
        if (!userFromDb) {
            successful = this.userDb.findById(user);
        }
        // return data to controller        
        return successful;
    }

    async getExistingUser(username) {
        // validate data for this use case
        if (!username) {
            throw new Error('You must supply a username.');
        }
        // collect data from database
        const result = await this.userDb.findByUsername(username);
        // return collected data
        return result;
    }
}

module.exports = UserService;