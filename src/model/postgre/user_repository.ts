import {prisma} from "../../driver/prisma"
import { UserEntity } from '../../entities/user_entity'

import { IUserResponse } from "../../types/user"

import { IUserRepository } from "./interfaces/user_repository_interface"

export class UserRepository implements IUserRepository{

    async create({name, email, password, role, section, grade}: UserEntity): Promise<UserEntity>{

        const user = await prisma.users.create({
            data:{
                name: name,
                email: email,
                password: password,
                role: role,
                section: section,
                grade: grade,
                created_at: new Date()
            }
        })   

        const user_entity = new UserEntity(
            user.name,
            user.email,
            user.password,
            user.section,
            user.grade,
            user.role,
            user.id,
            user.number,
            user.created_at
        )

        return user_entity
        

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
