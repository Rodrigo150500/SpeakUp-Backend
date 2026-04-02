import { IUserRepository } from "../../model/postgre/interfaces/user_repository_interface";

import { IRegisterUseCase } from './interface/register_interface';

import { RegisterUserDTO, RegisterUserResponseDTO } from './register_user_dto';

import { UserEntity } from '../../entities/user_entity';


export class RegisterUserUseCase implements IRegisterUseCase{

    private repository: IUserRepository

    constructor(user_repository: IUserRepository){
        this.repository = user_repository
    }

    async handle(data: RegisterUserDTO): Promise<RegisterUserResponseDTO>{

        const register_entity = new UserEntity(
                data.name, 
                data.email, 
                data.grade, 
                data.password, 
                data.role, 
                data.section)

        const response = await this.insert_in_database(register_entity)

        const formatted_response = this.format_response(response)

        return formatted_response
    }

    private async insert_in_database({name, email, password, section, grade, role}: UserEntity){

        try{

            const response = await this.repository.create({name, email, password, section, grade, role})
            
            return response

        }catch(error){

            throw new Error("Erro ao inserir no banco de dados") 

        }
    }

    private format_response(data: UserEntity):RegisterUserResponseDTO{        
        
        const {password, ...safeData} = data

        const response = {
            data: {
                operation: "Insert",
                count: 1,
                attributes: safeData
            },
            status_code: 201
        }
        
        return response
        
        
    }

}