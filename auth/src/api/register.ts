import { APIResponse, APIResponseStatus } from '../models/api';
import { ExtendedXProfile } from '../utils/profiles';

// /**
//  * Creates a universal Wonderverse account for the user. Stores key user-related data.
//  */
// export const createWonderverseAccount = async (
//     // account creation methods
//     method: 'x' | 'email',
//     xProfile?: ExtendedXProfile
// ): Promise<APIResponse> => {
//     try {
//         if (method === 'x') {
//             if (!xProfile) {
//                 return {
//                     status: APIResponseStatus.BAD_REQUEST,
//                     message: `(createWonderverseAccount) Method '${method}' requires a valid X profile.`
//                 }
//             }


//         } else if (method === 'email') {
//             // not implemented yet
//             return {
//                 status: APIResponseStatus.NOT_FOUND,
//                 message: `(createWonderverseAccount) Method '${method}' is not implemented yet.`
//             }
//         }
//     } catch (err: any) {
//         console.error(`(createWonderverseAccount) ${err.message}`);

//         return {
//             status: APIResponseStatus.INTERNAL_SERVER_ERROR,
//             message: `(createWonderverseAccount) ${err.message}`
//         }
//     }
// }