export interface IUser{
    name: string
    email: string
    password: string
    role: string
    section: string
    grade: string
}

export interface IUserResponse {
    id: string
    name: string,
    email: string,
    grade: string | null,
    section: string | null,
    number: number,
    password: string
    role: string,
    created_at: Date
}
