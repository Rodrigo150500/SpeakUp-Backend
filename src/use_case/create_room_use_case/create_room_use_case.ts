import { IRoomRepository } from "../../model/postgre/interfaces/room_repository_interface"
import { CreateOutput } from '../../model/postgre/types/room_repository_output'
import { CreateRoomDTO, CreateRoomResponseDTO } from './create_room_dto'
import { ICreateRoomUseCase } from './interface/create_room_interface'

export class CreateRoomUseCase implements ICreateRoomUseCase{

    private repository: IRoomRepository

    constructor(repository: IRoomRepository){
        this.repository = repository
    }

    async handle(data: CreateRoomDTO):Promise<CreateRoomResponseDTO>{
        
        const {name, room_code} = data

        this.verifyIfRoomExists(room_code)

        const response = await this.insert_in_database(name, room_code)

        const formatted_response = this.format_response(response)

        return formatted_response

    }

    private async verifyIfRoomExists(room_code: string){

        const room = await this.repository.findByCode(room_code)

        if(room){
            throw new Error("Sala existente")
        }

    }

    private async insert_in_database(name: string, room_code: string): Promise<CreateOutput>{

        const response = await this.repository.create({name, room_code})

        return response

    }

    private format_response(data: CreateOutput): CreateRoomResponseDTO{

        const response = {
            data: {
                operation: "Insert",
                count: 1,
                attributes: {
                    ...data
                }
            }
        }
        
        return response
        

    }


}