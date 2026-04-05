import { JoinRoomController } from "../../controller/join_room_controller/joint_room_controller";
import { RoomRepository } from "../../model/postgre/room_repository";
import { JoinRoomUseCase } from "../../use_case/join_room_use_case/join_room_use_case";

export function joinRoomComposer(){

    const repository = new RoomRepository()
    const use_case = new JoinRoomUseCase(repository)
    const controller = new JoinRoomController(use_case)

    return controller

}