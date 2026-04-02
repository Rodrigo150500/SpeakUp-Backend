import { Response, Request } from 'express';

export interface IRegisterController{

  execute: (req: Request, res: Response) => Promise<Response>
  
}