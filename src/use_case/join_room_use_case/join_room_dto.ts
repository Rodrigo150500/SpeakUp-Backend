import { CreateOutput } from '../../model/postgre/types/room_repository_output'

export type JoinRoomDTO = {
  room_code: string
}

export type JoinRoomResponseDTO = {
  data: {
    operation: string,
    count: number,
    attributes: CreateOutput
  },
  status_code: number
}