import { ExtendedXProfile } from './profiles';

declare global {
    namespace Express {
        export interface User extends ExtendedXProfile {}
    }
}

export {} // needed to make this file a module