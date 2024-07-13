import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { UserSchema } from '../schemas/User';

dotenv.config({ 
    path: resolve(__dirname, '../../../.env')
});

const WONDERVERSE_MONGODB_URI = process.env.WONDERVERSE_MONGODB_URI!;

/** instantiates a connection to the Wonderverse database */
export const WONDERVERSE_CONNECTION = mongoose.createConnection(WONDERVERSE_MONGODB_URI);

WONDERVERSE_CONNECTION.on('connected', () => {
    console.log('Connected to the Wonderverse database 🚀');
});

export const UserModel = WONDERVERSE_CONNECTION.model('Users', UserSchema, 'Users');