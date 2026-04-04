type BaseRegisterDTO = {
    name: string
    email: string
    password: string
}

export type StudentDTO = BaseRegisterDTO & {
    role: "STUDENT"
    grade: string
    section: string
}
        
export type TeacherDTO = BaseRegisterDTO & {
    role: "TEACHER"
}

export type RegisterUserDTO = TeacherDTO | StudentDTO

//------------------------------------------------

export type StudentResponseDTO = {

  id: string
  name: string
  email: string
  created_at: Date
  role: 'STUDENT',
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
  created_at: Date,
  role: 'TEACHER',
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