import {test, expect} from "vitest"
import { RoomRepository } from '../../model/postgre/room_repository'
import { JoinRoomUseCase } from './join_room_use_case'

test("Should verify room code sucessfully", async ()=>{

    const repository = new RoomRepository()
    const use_case = new JoinRoomUseCase(repository)

    const room_data = {
        room_code: "15236"
    }

    const response = await use_case.handle(room_data)

    console.log(response)
})