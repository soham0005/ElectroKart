const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/';
const dbName = process.env.DB_NAME || 'shopify';

let db = null;

async function connectToMongoDB() {
  if (db) return db;

  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = { connectToMongoDB };

