import {prisma} from "../../driver/prisma"

import { Role } from '../../../generated/prisma/enums'

import { IUserRepository } from './interfaces/user_repository_interface'

import { FindByEmailOutput, StudentUser, TeacherUser } from "./types/user_repository_output"
import { CreateStudentInput, CreateTeacherInput } from "./types/user_repository_input"

export class UserRepository implements IUserRepository{

    async createStudent(data: CreateStudentInput): Promise<StudentUser>{

        const user = await prisma.user.create({

            data:{
                name: data.name,
                email: data.email,
                password: data.password,
                role: Role.STUDENT,

                student:{
                    create:{
                        grade: data.grade,
                        section: data.section
                    }
                }                
            },
            include:{
                student: true
            }
        })
        

        return {
            ...user,
            teacher: null
        }

    }
    
    async createTeacher(data: CreateTeacherInput): Promise<TeacherUser>{

        const user = await prisma.user.create({
            data:{
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role,
                teacher:{
                    create:{}
                }               

            },
            include:{
                teacher: true
            }
        })

        return {
            ...user,
            student: null
        }

    }

    async findByEmail(email: string): Promise<FindByEmailOutput>{

        const user = await prisma.user.findUnique({
            where:{
                email: email
            },
            include:{
                student: true,
                teacher: true
            }
        })        

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        if (user.teacher) {
            return {
            ...user,
            student: null
            } as TeacherUser
        }

        if (user.student) {
            return {
            ...user,
            teacher: null
            } as StudentUser
        }

        throw new Error("Usuário não definido")

    }

}


