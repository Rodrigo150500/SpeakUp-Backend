import { RoomRepository } from '../../model/postgre/room_repository'
import { CreateRoomUseCase } from './create_room_use_case'

import {test, expect} from "vitest"


test("Should create a new room", async () => {

    const repository = new RoomRepository()
    const use_case = new CreateRoomUseCase(repository)

    const room_data = {
        name: "Sala do Alberto",
        room_code: "154872e"
    }

    const response = await use_case.handle(room_data)

    console.log(response)

})