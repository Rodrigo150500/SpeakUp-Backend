import { HttpRequest } from "../../../main/http/http_request";
import { HttpResponse } from "../../../main/http/http_response";
import { RoomEntity } from "../../../types/entity/room_entity";

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

export interface IJoinRoomUseCase{

    handle: (http_request: HttpRequest<Body>) => Promise<HttpResponse<BodyResponse>>

    
}