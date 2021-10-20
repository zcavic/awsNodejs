const { MongoClient } = require('mongodb');
const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;

async function makeDb() {
    const client = await MongoClient.connect(url);
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

module.exports = {
    database: makeDb
};