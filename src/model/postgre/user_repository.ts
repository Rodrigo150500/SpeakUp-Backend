import {prisma} from "../../driver/prisma"

import { IUser, IUserResponse } from "../../types/user"

export class UserRepository{

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
        
        const { password: _, ...userWithoutPassword } = user;

        return userWithoutPassword
    }

    async findByEmail(email: string){

        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        })

        return user

    } 

}

