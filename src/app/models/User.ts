import { IUser } from './IUser';

export class User implements IUser {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumnber: string;
    password ?: string;
    token: string;
    
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}