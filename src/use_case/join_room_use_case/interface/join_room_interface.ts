import { JoinRoomDTO, JoinRoomResponseDTO } from '../join_room_dto';

export interface IJoinRoomUseCase{

    handle: (data: JoinRoomDTO) => Promise<JoinRoomResponseDTO>

    
}