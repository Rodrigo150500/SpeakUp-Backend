import { Role } from "../../../generated/prisma/enums";
import { FindByEmailOutput} from "../../model/postgre/types/user_repository_output";
import { UserRepository } from "../../model/postgre/user_repository";
import { ILoginUseCase } from './interface/login_interface';
import { LoginDTO, LoginResponseDTO } from "./login_dto";

export class LoginUseCase implements ILoginUseCase{

    private repository: UserRepository

    constructor(repository: UserRepository){
        this.repository = repository
    }

    async handle(data: LoginDTO):Promise<LoginResponseDTO>{

        const {email, password} = data
        
        const user =  await this.findUserByEmail(email)

        if(user.role == 'STUDENT'){
            if(user.email == email && user.password == password){
                
                const formatted_response = this.format_response_student(user)
                
                return formatted_response

            }
        }else if(user.role == 'TEACHER'){

            if(user.email == email && user.password == password){

                const formatted_response = this.format_response_teacher(user)
                
                return formatted_response
                
            }
        }

        throw new Error("Credenciais inválidas")
        
    }

    private async findUserByEmail(email: string){

        const user = await this.repository.findByEmail(email)

        if(!user){
            throw new Error("Usuário não encontrado")
        }
        
        return user
        
    }

    private format_response_student(data: FindByEmailOutput){
        const response = {
            data:{
                operation: "Get",
                count: 1,
                attributes: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    created_at: data.created_at,
                    role: Role.STUDENT,
                    student:{
                        id: data.student!.id,
                        user_id: data.student!.user_id,
                        grade: data.student!.grade,
                        section: data.student!.section,
                        number: data.student!.number

                    }
                }
            },status_code: 200
        }
    
        return response
    }

    private format_response_teacher(data: FindByEmailOutput){

        const response = {
            data:{
                operation: "Get",
                count: 1,
                attributes: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    created_at: data.created_at,
                    role: Role.TEACHER,
                    teacher:{
                        id: data.teacher!.id,
                        user_id: data.teacher!.user_id
                    }
                }
            },status_code: 200
        }

        return response
    }

      

}