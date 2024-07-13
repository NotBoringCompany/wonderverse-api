import mongoose from 'mongoose';

/**
 * User schema for Wonderverse. Schema representation of the `User` interface in `models/user.ts`.
 */
export const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    createdTimestamp: Number,
    xProfile: {
        xId: String,
        xUsername: String,
        xDisplayName: String,
        xProfilePicture: String
    },
    discordProfile: {
        discordId: String,
        displayName: String,
        username: String,
        refreshToken: String
    },
    walletData: {
        mainWallet: {
            address: String,
            privateKey: String
        },
        secondaryWallet: [{
            address: String,
            signatureMessage: String,
            signature: String
        }]
    },
})