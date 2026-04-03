import { Role } from "../../../generated/prisma/enums"
import { StudentUser } from "../../model/postgre/types/user_repository_output"

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

//------------------------------------------------

export type StudentResponseDTO = {

  id: string
  name: string
  email: string
  password: string
  created_at: Date
  role: Role,
  student: {
    id: string
    user_id: string
    grade: string 
    section: string
    number: number
  }

}

export type TeacherResponseDTO = {
  id: string
  name: string
  email: string
  password: string
  created_at: Date
  role: Role,
  teacher:{
    id: string,
    user_id: string
  }
}


export type RegisterUserResponseDTO = {
  data: {
    operation: string
    count: number
    attributes: StudentResponseDTO | TeacherResponseDTO
  },
  status_code: number
}