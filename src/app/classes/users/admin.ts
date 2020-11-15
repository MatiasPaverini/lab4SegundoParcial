import { User } from './user';

export class Admin extends User{

    constructor(name:string, surname:string, email:string, type:string) {
        super(name, surname, email, type);
    }
}
