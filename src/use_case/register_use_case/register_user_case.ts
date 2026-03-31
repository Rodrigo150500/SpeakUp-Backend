import { IUserRepository } from "../../model/postgre/interfaces/user_repository_interface";

import { IUser } from "../../types/user";

import { register_user_validation } from "../../validation/register_user_validation";

import { HttpResponse } from "../../main/http/http_response";
import { HttpRequest } from "../../main/http/http_request";

type Body = {
    name: string
    email: string 
    password: string
    section: string
    grade: string
    role: string
}

type BodyResponse = {
    data: {
            operation: string,
            count: number,
            attributes: Omit<IUser, "password">
        }
}

export class RegisterUserUseCase{

    private repository: IUserRepository

    constructor(user_repository: IUserRepository){
        this.repository = user_repository
    }

    async handle(http_request: HttpRequest<Body>): Promise<HttpResponse<BodyResponse>>{

        const parsed = register_user_validation(http_request.body)

        await this.insert_in_database(parsed)

        const formatted_response = this.format_response(parsed)

        return formatted_response
    }

    private async insert_in_database({name, email, password, section, grade, role}: IUser){

        try{

            await this.repository.create({name, email, password, section, grade, role})
        
        }catch(error){

            throw new Error("Erro ao inserir no banco de dados") 

        }
    }

    private format_response(data: IUser){        
        
        const {password, ...safeData} = data

        const response = {
            data: {
                operation: "Insert",
                count: 1,
                attributes: safeData
            }
        }
        
        const http_response = new HttpResponse(response, 201)

        return http_response
        
    }

}