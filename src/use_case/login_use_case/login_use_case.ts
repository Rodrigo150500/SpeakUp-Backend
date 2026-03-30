import { HttpRequest } from "../../main/http/http_request";
import { UserRepository } from "../../model/postgre/user_repository";
import { login_user_validation } from "../../validation/login_user_validation";

export class LoginUseCase{

    repository: UserRepository

    constructor(repository: UserRepository){
        this.repository = repository
    }

    async handle(http_request: HttpRequest){

        const parsed = login_user_validation(http_request.body)

        

    }

}