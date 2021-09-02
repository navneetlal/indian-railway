import { MongoClient } from 'mongodb';

import type { Collection } from 'mongodb';

const MONGODB_USER = process.env.MONGODB_USER || 'navneetlalg';
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || 'helloworld';
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost'

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/users`;
const client = new MongoClient(uri, { readPreference: 'secondaryPreferred' });
let collection: Collection | null = null

export default async function mongoService(username: string) {
  try {
    if (!collection) {
      await client.connect();
      const db = client.db('users');
      collection = db.collection('user_cred');
    }
    const users = await collection.findOne({ application: 'railway', username });
    return users;
  } catch (error) {
    console.error(error)
    return null
  }
}