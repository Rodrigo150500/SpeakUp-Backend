import {test, expect} from "vitest"
import { RoomRepository } from "../../model/postgre/room_repository"
import { CreateRoomUseCase } from "./create_room_use_case"
import { HttpRequest } from "../../main/http/http_request"
import { RoomDTO } from "../../types/DTO/roomDTO"
import { HttpResponse } from "../../main/http/http_response"

test("Should create room in database", async ()=>{

    const repository = new RoomRepository
    const use_case = new CreateRoomUseCase(repository)

    const body: RoomDTO = {
        name: "Aula de português 5° ano",
        room_code: "1523548"
    }

    const http_request = new HttpRequest(body)

    const response = await use_case.handle(http_request)

    const expected_response_body = {
        data: {
            operation: "Insert",
            count: 1,
            attributes: {
                ...body,
                id: expect.any(String),
                created_at: expect.any(Date)
            }
        }
    }

    expect(response).toBeInstanceOf(HttpResponse)

    expect(response.body).toStrictEqual(expected_response_body)

    expect(response.status_code).toBe(201)

})