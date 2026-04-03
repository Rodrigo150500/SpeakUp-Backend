import { IUserRepository } from "../../model/postgre/interfaces/user_repository_interface";
import { StudentUser, TeacherUser } from "../../model/postgre/types/user_repository_output";

import { IRegisterUseCase } from './interface/register_interface';

import { RegisterUserDTO, RegisterUserResponseDTO, TeacherResponseDTO, StudentResponseDTO, StudentDTO, TeacherDTO } from './register_user_dto';

export class RegisterUserUseCase implements IRegisterUseCase{

    private repository: IUserRepository

    constructor(user_repository: IUserRepository){
        this.repository = user_repository
    }

    async handle(data: RegisterUserDTO): Promise<RegisterUserResponseDTO>{
        
        if(data.role == "STUDANT"){

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
        return {
            data:{
                operation: "Insert",
                count: 1,
                attributes: {
                    
                }
            },status_code: 201
        }
    }

    private format_response_teacher(data: TeacherUser){
       return {
            data:{
                operation: "Insert",
                count: 1,
                attributes: data
            },status_code: 201
        }
    }

    
            
}