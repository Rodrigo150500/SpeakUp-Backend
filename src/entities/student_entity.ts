export class StudentEntity{

    id?: string
    grade: string
    section: string
    number: number
    user_id: string

    constructor(grade: string, section: string, number: number, user_id: string, id?: string){
        this.id = id
        this.grade = grade
        this.section = section
        this.number = number
        this.user_id = user_id
    }

}