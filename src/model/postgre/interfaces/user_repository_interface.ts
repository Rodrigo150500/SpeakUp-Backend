import { CreateStudentInput, CreateStudentOutput, CreateTeacherInput, CreateTeacherOutput, FindByEmailOutput } from '../types/user_repository_types';


export interface IUserRepository{

    createStudent: (data: CreateStudentInput) => Promise<CreateStudentOutput>

    createTeacher: (data: CreateTeacherInput) => Promise<CreateTeacherOutput>

    findByEmail: (email: string) => Promise<FindByEmailOutput>
       
}