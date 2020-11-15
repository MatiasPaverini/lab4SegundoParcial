import { Classes } from '../subjects/classes';
import { User } from './user';

export class Teacher extends User{

    classes: Classes[];

    constructor(name:string, surname:string, email:string, type:string, classes:Classes[]) {
        super(name, surname, email, type);
        this.classes = classes;
    }

    teacherJSON() {
        let json = this.toJSON();
        // json.classes 
    }
}
