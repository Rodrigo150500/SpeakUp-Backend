import { IRoomRepository } from "../../model/postgre/interfaces/room_repository_interface";
import { CreateOutput } from '../../model/postgre/types/room_repository_output';
import { IJoinRoomUseCase } from "./interface/join_room_interface";
import { JoinRoomDTO, JoinRoomResponseDTO } from './join_room_dto';


export class JoinRoomUseCase implements IJoinRoomUseCase{

    private repository: IRoomRepository

    constructor(repository: IRoomRepository){
        this.repository = repository
    }

    async handle(data: JoinRoomDTO): Promise<JoinRoomResponseDTO>{

        const {room_code} = data

        const room_data = await this.verify_if_room_code_exists(room_code)
        
        const formatted_response = this.format_response(room_data)

        return formatted_response

    }

    private async verify_if_room_code_exists(code: string){

        const room = await this.repository.findByCode(code)

        if(room){
            return room
        }

        throw new Error("Código não encontrado")

    }

    private format_response(data: CreateOutput){

        const response = {
            data:{
                operation: "Get",
                count: 1,
                attributes: {
                    ...data
                }
            }
        }
        return response

    }


}