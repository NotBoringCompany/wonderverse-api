import { Profile as XProfile } from '@superfaceai/passport-twitter-oauth2';

/**
 * Extended profile for an X account.
 */
export interface ExtendedXProfile extends XProfile {
    photos?: {
        value: string;
    }[];
    xAccessToken: string;
    xRefreshToken: string;
    xExpiryDate: number;
}