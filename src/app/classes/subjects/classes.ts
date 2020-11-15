import { Teacher } from "../users/teacher";

export class Classes {

    name: string;
    teacher: Teacher;
    size: number;
    available: number;
    quarter: number;
    photo: any;

    constructor(name: string, teacher: Teacher, size: number, photo: any, quarter:number, available?: number) {
        this.name = name;
        this.teacher = teacher;
        this.available = available == undefined ? size : available;
        this.size = size;
        this.quarter = quarter;
        this.photo = photo;
    }


    public toJSON() {
        return { "name": this.name, "teacher": this.teacher, "size": this.size, "photo": this.photo, "quarter": this.quarter, "available": this.available };
    }

}
