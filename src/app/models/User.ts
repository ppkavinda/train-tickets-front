import { IUser } from './IUser';

export class User implements IUser {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    password ?: string;
    token: string;
    
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}