import { Classes } from '../subjects/classes';
import { User } from './user';

export class Student extends User{

    classes: Classes[];
    photo: any;


    constructor(name:string, surname:string, email:string, type:string, classes:Classes[], photo:any) {
        super(name, surname, email, type);
        this.classes = classes;
        this.photo = photo;
    }

//     public toJSON() {
        
//     }
}
