const { MongoClient, ObjectId } = require('mongodb');

class UserDbAgent {

    async getDb() {
        let url = process.env.DB_URL;
        let dbName = process.env.DB_NAME;
        let client = await MongoClient.connect(url);
        return client.db(dbName);
    }

    async findByUsername(username) {
        try {
            let db = await this.getDb();
            var query = { username: username };
            let result = await db.collection('users').find(query).toArray();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserDbAgent;