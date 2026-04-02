type BaseRegisterDTO = {
    name: string
    email: string
    password: string
    role: "student" | "teacher"
}

type StudentDTO = BaseRegisterDTO & {
    role: "student"
    grade: string
    section: string
    user_id: string

}

type TeacherDTO = BaseRegisterDTO & {
    role: "teacher"
    user_id: string
}