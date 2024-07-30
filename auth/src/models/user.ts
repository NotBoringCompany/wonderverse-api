import { WalletData } from './web3';

/**
 * Represents a user's account data for Wonderverse.
 */
export interface User {
    /** the user's unique database ID */
    userId: string;
    /** when the account was created */
    createdTimestamp: number;
    /** the user's X (formerly twitter) profile (if linked) */
    xProfile?: XProfile;
    /** the user's discord profile (if linked) */
    discordProfile?: DiscordProfile;
    /** the user's Web3 wallet data, created when the user signs up for the first time */
    walletData: WalletData;
}

/**
 * Represents the user's X account profile.
 */
export interface XProfile {
    /** the user's X ID */
    xId: string;
    /** the user's X username */
    xUsername: string;
    /** the user's X display name */
    xDisplayName: string;
    /** the user's X picture URL */
    xProfilePicture: string;
}

/**
 * Represents a user's discord profile.
 */
export interface DiscordProfile {
    /** the user's unique discord ID */
    discordId: string;
    /** the user's discord display name */
    displayName: string | null;
    /** the user's discord username */
    username: string;
    /** the unique refresh token obtained from discord's oauth; lasts 365 days */
    refreshToken: string;
}