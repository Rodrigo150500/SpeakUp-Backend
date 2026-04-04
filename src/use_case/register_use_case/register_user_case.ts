import { IUserRepository } from "../../model/postgre/interfaces/user_repository_interface";
import { StudentUser, TeacherUser } from "../../model/postgre/types/user_repository_output";

import { IRegisterUseCase } from './interface/register_interface';

import { RegisterUserDTO, RegisterUserResponseDTO, StudentDTO, TeacherDTO } from './register_user_dto';

export class RegisterUserUseCase implements IRegisterUseCase{

    private repository: IUserRepository

    constructor(user_repository: IUserRepository){
        this.repository = user_repository
    }

    async handle(data: RegisterUserDTO): Promise<RegisterUserResponseDTO>{
        
        if(data.role == "STUDENT"){

            const response = await this.insert_student_in_database(data)

            const formatted_response = this.format_response_student(response)

            return formatted_response

        }else{

            const response = await this.insert_teacher_in_database(data)

            const formatted_resposne = this.format_response_teacher(response)

            return formatted_resposne
        }        


    }   

    private async insert_student_in_database(data: StudentDTO){

        return await this.repository.createStudent(data)

    }

    private async insert_teacher_in_database(data: TeacherDTO){

        return await this.repository.createTeacher(data)
    }

    private format_response_student(data: StudentUser){
        const response:RegisterUserResponseDTO = 
        {
            data:{
                operation: "Insert",
                count: 1,
                attributes: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    created_at: data.created_at,
                    role: 'STUDENT',
                    student:{
                        id: data.student!.id,
                        user_id: data.student!.user_id,
                        grade: data.student!.grade,
                        section: data.student!.section,
                        number: data.student!.number

                    }
                }
            },status_code: 201
        }
        return response
    }

    private format_response_teacher(data: TeacherUser){

        const response: RegisterUserResponseDTO = {
            data:{
                operation: "Insert",
                count: 1,
                attributes: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    created_at: data.created_at,
                    role: 'TEACHER',
                    teacher:{
                        id: data.teacher!.id,
                        user_id: data.teacher!.user_id
                    }
                }
            },status_code: 201
        }

        return response
    }

    
            
}