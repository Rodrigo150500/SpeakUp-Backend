import { IRegisterUseCase } from '../../use_case/register_use_case/interface/register_interface'

import {Response, Request} from "express"

import { register_user_validation } from '../../validation/register_user_validation'

import { IRegisterController } from './interface/register_interface'

export class RegisterController implements IRegisterController{

  use_case: IRegisterUseCase

  constructor(use_case: IRegisterUseCase){
    this.use_case = use_case
  }

  async execute(req: Request, res: Response): Promise<Response>{
    
    const parsed = register_user_validation(req.body)

    const response = await this.use_case.handle(parsed)

    return res.status(response.status_code).json(response.data)

  }

}

