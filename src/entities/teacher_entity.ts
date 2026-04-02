export class TeacherEntity {

    id?: string
    user_id: string

    constructor(user_id: string, id?: string){
        this.user_id = user_id
        this.id = id
    }

}