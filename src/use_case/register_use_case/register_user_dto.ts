import { UserEntity } from '../../entities/user_entity'

export interface RegisterUserDTO{
    name: string
    email: string 
    password: string
    section: string
    grade: string
    role: string
}

export interface RegisterUserResponseDTO {
     data: {
        operation: string,
        count: number,
        attributes: Omit<UserEntity, "password">
    },
    status_code: number
}