import {prisma} from "../../driver/prisma"

import { Role } from '../../../generated/prisma/enums'
import { CreateStudentInput, CreateStudentOutput, CreateTeacherInput, CreateTeacherOutput, FindByEmailOutput, StudentUser, TeacherUser} from './types/user_repository_types'
import { IUserRepository } from './interfaces/user_repository_interface'

export class UserRepository implements IUserRepository{

    async createStudent(data: CreateStudentInput): Promise<CreateStudentOutput>{

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
        

        return user

    }
    
    async createTeacher(data: CreateTeacherInput): Promise<CreateTeacherOutput>{

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

        return user

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


