import { HttpRequest } from '../../../main/http/http_request'
import { HttpResponse } from '../../../main/http/http_response'
import { IUser } from '../../../types/user'

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

export interface IRegisterUseCase{

  handle: (http_request: HttpRequest<Body>) => Promise<HttpResponse<BodyResponse>>  


}