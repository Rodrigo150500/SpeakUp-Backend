import { Request, Response } from 'express';
import { ICreateRoomUseCase } from '../../use_case/create_room_use_case/interface/create_room_interface';
import { create_room_validation } from '../../validation/create_room_validation';
import { ICreateRoom } from './interfaces/create_room_interface';

export class CreateRoomController implements ICreateRoom{

  private use_case: ICreateRoomUseCase

  constructor(use_case: ICreateRoomUseCase){
    this.use_case = use_case
  }

  async execute(req: Request, res: Response){

    const parsed = create_room_validation(req.body)

    const response = await this.use_case.handle(parsed)

    return res.status(response.status_code).json(response.data)

  }

}