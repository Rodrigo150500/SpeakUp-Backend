import { RoomDTO } from "../../../types/DTO/roomDTO";
import { RoomEntity } from "../../../types/entity/room_entity";

export interface IRoomRepository{

    create: ({name, room_code}: RoomDTO) => Promise<RoomEntity>    

    findByCode: (code: string) => Promise<RoomEntity | null>

}