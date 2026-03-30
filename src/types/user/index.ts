export interface IUser{
    name: string
    email: string
    password: string
    role: string
    classe: string
    grade: string
}

export interface IUserResponse {
    id: string
    name: string,
    email: string,
    grade: string | null,
    class: string | null,
    number: number,
    password: string
    role: string,
    created_at: Date
}
