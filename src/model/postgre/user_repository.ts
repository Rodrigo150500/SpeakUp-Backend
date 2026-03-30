import {prisma} from "../../driver/prisma"

import { IUser, IUserResponse } from "../../types/user"

import { IUserRepository } from "./interfaces/user_repository_interface"

export class UserRepository implements IUserRepository{

    async create({name, email, password, role, classe, grade}: IUser): Promise<IUserResponse>{

        const user = await prisma.users.create({
            data:{
                name: name,
                email: email,
                password: password,
                role: role,
                class: classe,
                grade: grade,
                created_at: new Date()
            }
        })
        

        return user
    }

    async findById(id: string): Promise<IUserResponse | null> {

        const user = await prisma.users.findUnique({
            where:{
                id: id
            }
        })

        return user

    }

    async findByEmail(email: string): Promise<IUserResponse | null>{

        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        return user

    } 
}
