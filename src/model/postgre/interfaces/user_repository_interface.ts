import { CreateStudentInput, CreateTeacherInput } from '../types/user_repository_input'
import { FindByEmailOutput, StudentUser, TeacherUser } from '../types/user_repository_output'


export interface IUserRepository{

    createStudent: (data: CreateStudentInput) => Promise<StudentUser>

    createTeacher: (data: CreateTeacherInput) => Promise<TeacherUser>

    findByEmail: (email: string) => Promise<FindByEmailOutput>
       
}