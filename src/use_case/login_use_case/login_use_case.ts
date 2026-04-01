import { HttpRequest } from "../../main/http/http_request";
import { HttpResponse } from "../../main/http/http_response";
import { UserRepository } from "../../model/postgre/user_repository";
import { IUserResponse } from "../../types/user";
import { login_user_validation } from "../../validation/login_user_validation";
import { ILoginUseCase } from './interface/login_interface';

type Body = {
    email: string
    password: string
}

type BodyResponse = {
    data:{
        operation: string,
        count: number,
        attributes: Omit<IUserResponse, "password">
    }
}

export class LoginUseCase implements ILoginUseCase{

    private repository: UserRepository

    constructor(repository: UserRepository){
        this.repository = repository
    }

    async handle(http_request: HttpRequest<Body>):Promise<HttpResponse<BodyResponse>>{

        const parsed = login_user_validation(http_request.body)
        
        const {email, password} = parsed

        const user =  await this.findUserByEmail(email)

        if(email == user?.email && password == user.password){
            return this.format_response(user)
        }

        throw new Error("Credenciais inválidas")
        
    }

    private async findUserByEmail(email: string): Promise<IUserResponse | null>{

        const user = await this.repository.findByEmail(email)

        if(user){
            return user
        }else{
            throw new Error("Usuario não encontrado")
        }
    }

    private format_response(user: IUserResponse){

        const {password, ...safeData} = user

        return new HttpResponse({
            data:{
                operation: "Get",
                count: 1,
                attributes: safeData
            }
        }, 200)
    }    

}