import {Prisma} from "../../../../generated/prisma/client"

export type StudentUser = Prisma.UserGetPayload<{
  include: { student: true }
}> & { teacher?: null }


export type TeacherUser = Prisma.UserGetPayload<{
  include: { teacher: true }
}> & { student?: null }


export type FindByEmailOutput = StudentUser | TeacherUser