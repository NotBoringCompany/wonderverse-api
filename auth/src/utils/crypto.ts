import crypto from 'crypto';

/** encryption key used for AES encryption */
// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!;
export const ENCRYPTION_KEY = '226de9172f8402ca6992f8ee544b241b91fbec592db2fb82002fb73aac6ab48b';
/** 16 for AES */
const IV_LENGTH = 16;

/** Encrypts a private key */
export const encryptPrivateKey = (privateKey: string): string => {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let encrypted = cipher.update(privateKey, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return iv.toString('hex') + ':' + encrypted;
}

/** Decrypts a private key */
export const decryptPrivateKey = (encryptedPrivateKey: string): string => {
    const parts = encryptedPrivateKey.split(':');
    const iv = Buffer.from(parts.shift() as string, 'hex');
    const encryptedText = Buffer.from(parts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString('utf8'); 
}