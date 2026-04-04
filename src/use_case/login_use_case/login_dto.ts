import { StudentResponseDTO, TeacherResponseDTO } from "../register_use_case/register_user_dto"

export type LoginDTO = {
    email: string,
    password: string
}

export type LoginResponseDTO = {
  data: {
    operation: string
    count: number
    attributes: StudentResponseDTO | TeacherResponseDTO
  },
  status_code: number
}