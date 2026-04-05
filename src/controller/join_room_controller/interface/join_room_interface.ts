import {Request, Response} from 'express'

export interface IJoinRoomController{

  execute: (req: Request, res: Response) => Promise<Response>
  

}