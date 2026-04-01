import { HttpRequest } from "../../main/http/http_request";
import { HttpResponse } from "../../main/http/http_response";
import { IRoomRepository } from "../../model/postgre/interfaces/room_repository_interface";
import { RoomEntity } from "../../types/entity/room_entity";
import { join_room_validation } from "../../validation/join_room_validation";
import { IJoinRoomUseCase } from "./interface/join_room_interface";


type Body = {
    room_code: string
}

type BodyResponse = {
     data:{
            operation: string,
            count: number,
            attributes: RoomEntity
        }
}

export class JoinRoomUseCase implements IJoinRoomUseCase{

    private repository: IRoomRepository

    constructor(repository: IRoomRepository){
        this.repository = repository
    }

    async handle(http_request: HttpRequest<Body>): Promise<HttpResponse<BodyResponse>>{

        const parsed = join_room_validation(http_request.body)

        const {room_code} = parsed

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

    private format_response(data_room: RoomEntity){

        return new HttpResponse({
            data:{
                operation: "Get",
                count: 1,
                attributes: data_room
            }
        }, 200)

    }


}