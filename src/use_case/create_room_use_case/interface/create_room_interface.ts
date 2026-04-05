import { CreateRoomDTO, CreateRoomResponseDTO } from '../create_room_dto';

export interface ICreateRoomUseCase{

    handle(data: CreateRoomDTO):Promise<CreateRoomResponseDTO>
  
}