import { IUserRepository } from "../../model/postgre/interfaces/user_repository_interface";

import { IRegisterUseCase } from './interface/register_interface';

import { RegisterUserDTO, RegisterUserResponseDTO, StudentDTO, TeacherDTO } from './register_user_dto';

export class RegisterUserUseCase implements IRegisterUseCase{

    private repository: IUserRepository

    constructor(user_repository: IUserRepository){
        this.repository = user_repository
    }

    async handle(data: RegisterUserDTO): Promise<RegisterUserResponseDTO>{
        
        if(data.role == "STUDANT"){

            const response = await this.insert_student_in_database(data)

        }else{

            const response = await this.insert_teacher_in_database(data)

        }        


    }   

    private async insert_student_in_database(data: StudentDTO){

        return await this.repository.createStudent(data)

    }

    private async insert_teacher_in_database(data: TeacherDTO){

        return await this.repository.createTeacher(data)
    }

    
            
}