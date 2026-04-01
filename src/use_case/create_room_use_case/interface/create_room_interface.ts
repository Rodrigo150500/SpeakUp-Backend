import { HttpRequest } from '../../../main/http/http_request'
import { HttpResponse } from '../../../main/http/http_response'
import { RoomEntity } from '../../../types/entity/room_entity'

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

export interface ICreateRoomUseCase{

  handle: (http_request: HttpRequest<Body>) => Promise<HttpResponse<BodyResposnse>>
  
}