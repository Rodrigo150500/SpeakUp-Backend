import {Prisma} from "../../../generated/prisma/client"

type BaseRegisterDTO = {
    name: string
    email: string
    password: string
}

export type StudentDTO = BaseRegisterDTO & {
    role: "STUDANT"
    grade: string
    section: string
    user_id: string

}
        
export type TeacherDTO = BaseRegisterDTO & {
    role: "TEACHER"
    user_id: string
}

export type RegisterUserDTO = TeacherDTO | StudentDTO

export type StudentUser = Prisma.UserGetPayload<{
  include: { student: true }
}> & { teacher: null }

export type TeacherUser = Prisma.UserGetPayload<{
  include: { teacher: true }
}> & { student: null }

export type RegisterUserResponseDTO = {
  data:{
    operation: string,
    count: number,
    attributes: StudentUser | TeacherUser
  },
  status_code: number
}
