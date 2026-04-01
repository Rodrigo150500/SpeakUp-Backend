import { HttpRequest } from '../../../main/http/http_request';
import { HttpResponse } from '../../../main/http/http_response';
import { IUserResponse } from '../../../types/user';

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

export interface ILoginUseCase{


  handle: (http_request: HttpRequest<Body>) => Promise<HttpResponse<BodyResponse>>
  

}