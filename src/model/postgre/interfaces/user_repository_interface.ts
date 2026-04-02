import { UserEntity } from '../../../entities/user_entity'
import { IUser, IUserResponse } from "../../../types/user"

export interface IUserRepository{

    create: ({name, email, password, role, section, grade}: IUser) => Promise<UserEntity>
    
    findByEmail: (email: string) => Promise<IUserResponse | null>

    findById: (id: string) => Promise<IUserResponse | null >
}