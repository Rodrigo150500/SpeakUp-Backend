import { CreateRoomController } from "../../controller/create_room_controller/create_room_controller";
import { RoomRepository } from "../../model/postgre/room_repository";
import { CreateRoomUseCase } from "../../use_case/create_room_use_case/create_room_use_case";

export function createRoomComposer(){

    const repository = new RoomRepository()
    const use_case = new CreateRoomUseCase(repository)
    const controller = new CreateRoomController(use_case)

    return controller

}