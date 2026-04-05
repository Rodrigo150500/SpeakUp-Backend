import { CreateOutput } from '../../model/postgre/types/room_repository_output'


export type CreateRoomDTO = {
  name: string,
  room_code: string
}

export type CreateRoomResponseDTO = {
  data:{
    operation: string,
    count: number,
    attributes: CreateOutput 
  },
  status_code: number
}