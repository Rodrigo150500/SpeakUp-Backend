import { Role } from '../../../../generated/prisma/enums'

import {Prisma} from "../../../../generated/prisma/client"
import { includes } from 'zod'

export type CreateStudentInput = {

  name: string
  email: string
  password: string
  role: Role
  grade: string
  section: string

}

export type CreateStudentOutput = Prisma.UserGetPayload<{
  include: { student: true }
}>

export type CreateTeacherInput = {

  name: string,
  email: string,
  password: string,
  created_at: Date,
  role: Role

}

export type CreateTeacherOutput = Prisma.UserGetPayload<{
  include:{
    teacher: true
  }
}>

export type StudentUser = Prisma.UserGetPayload<{
  include: { student: true }
}> & { teacher: null }

export type TeacherUser = Prisma.UserGetPayload<{
  include: { teacher: true }
}> & { student: null }

export type FindByEmailOutput = StudentUser | TeacherUser