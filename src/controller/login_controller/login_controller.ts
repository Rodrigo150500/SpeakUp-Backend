import { Response, Request } from "express";
import { ILoginUseCase } from "../../use_case/login_use_case/interface/login_interface";
import { login_user_validation } from "../../validation/login_user_validation";
import { ILogin } from "./interface/login_interface";

export class LoginController implements ILogin{

    private use_case: ILoginUseCase

    constructor(use_case: ILoginUseCase){
        this.use_case = use_case
    }

    async execute(req: Request, res: Response):Promise<Response>{

        const parsed = login_user_validation(req.body)

        const response = await this.use_case.handle(parsed)

        return res.status(response.status_code).json(response.data)

    }

}