import { HttpRequest } from "../../main/http/http_request"
import { HttpResponse } from "../../main/http/http_response"
import { IRoomRepository } from "../../model/postgre/interfaces/room_repository_interface"
import { RoomEntity } from "../../types/entity/room_entity"
import { create_room_validation } from "../../validation/create_room_validation"

type Body = {
    name: string,
    room_code: string
}

type BodyResposnse = {
    data:{
        operation: string,
        count: number,
        attributes: RoomEntity
    }
}

export class CreateRoomUseCase{

    private repository: IRoomRepository

    constructor(repository: IRoomRepository){
        this.repository = repository
    }

    async handle(http_request: HttpRequest<Body>):Promise<HttpResponse<BodyResposnse>>{
        
        const parsed = create_room_validation(http_request.body)

        const {name, room_code} = parsed

        const response = await this.insert_in_database(name, room_code)

        const formatted_response = this.format_response(response)

        return formatted_response

    }

    private async insert_in_database(name: string, room_code: string): Promise<RoomEntity>{

        const response = await this.repository.create({name, room_code})

        return response

    }

    private format_response(data: RoomEntity){

        return new HttpResponse({
            data:{
                operation: "Insert",
                count: 1,
                attributes: data
            }
        }, 201)

    }


}