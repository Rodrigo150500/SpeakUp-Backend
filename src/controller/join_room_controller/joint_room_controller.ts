import { Request, Response } from 'express';
import { IJoinRoomUseCase } from '../../use_case/join_room_use_case/interface/join_room_interface';
import { join_room_validation } from '../../validation/join_room_validation';
import { IJoinRoomController } from './interface/join_room_interface';

export class JoinRoomController implements IJoinRoomController{

  private use_case: IJoinRoomUseCase

  constructor(use_case: IJoinRoomUseCase){
    this.use_case = use_case
  }

  async execute(req: Request, res: Response): Promise<Response>{

    const parsed = join_room_validation(req.body)

    const response = await this.use_case.handle(parsed)

    return res.status(response.status_code).json(response.data)

  }

}