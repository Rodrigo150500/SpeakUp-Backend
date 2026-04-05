import {Request, Response } from 'express'

export interface ICreateRoom{

    execute: (req: Request, res: Response) => Promise<Response>
  
}