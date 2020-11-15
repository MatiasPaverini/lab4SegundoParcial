export class User {

    name: string;
    surname: string;
    email: string;
    type: string;

    constructor(name: string, surname: string, email: string, type: string) {
        
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.type = type;

    }


    public toJSON(): Object {
        return {"name": this.name, "surname": this.surname, "email": this.email, "type": this.type};
    }

}
