import { Request, Response } from "express";

export interface ILogin{

    execute: (req: Request, res: Response) => Promise<Response>

}