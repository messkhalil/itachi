import { MongoClient } from 'mongodb';

const uri = 'your_mongodb_connection_string_here';
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

export const getDatabase = () => {
    return client.db('social_media_website');
};