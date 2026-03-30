import { IUser, IUserResponse } from "../../../types/user"

export interface IUserRepository{

    create: ({name, email, password, role, section, grade}: IUser) => Promise<IUserResponse>
    
    findByEmail: (email: string) => Promise<IUserResponse | null>

    findById: (id: string) => Promise<IUserResponse | null >
}