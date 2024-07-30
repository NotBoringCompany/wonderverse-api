import { MainWallet } from '../models/web3';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import { encryptPrivateKey } from '../utils/crypto';

/**
 * Generates a Web3 wallet instance for the user upon registering their Wonderverse account.
 * 
 * This provides them with a private key and the wallet's address.
 */
export const generateWallet = (): MainWallet => {
    const privateKey = generatePrivateKey();
    const account = privateKeyToAccount(privateKey);

    return {
        address: account.address,
        encryptedPrivateKey: encryptPrivateKey(privateKey)
    };
}