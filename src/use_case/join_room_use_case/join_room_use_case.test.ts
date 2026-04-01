import {test, expect} from "vitest"

import { RoomRepository } from "../../model/postgre/room_repository"

import { JoinRoomUseCase } from "./join_room_use_case"
import { HttpRequest } from "../../main/http/http_request"
import { HttpResponse } from "../../main/http/http_response"

test("Should verify room code sucessfully", async ()=>{

    const repository = new RoomRepository()
    const use_case = new JoinRoomUseCase(repository)

    const body = {
        room_code: "123456"
    }

    const http_request = new HttpRequest(body)

    const response = await use_case.handle(http_request)

    const expected_response_body = {
        data:{
            operation: "Get",
            count: 1,
            attributes: {
                ...body,
                created_at: expect.any(Date) ,
                id: "3926b71a-8a3b-4314-81c1-b61fd21f58c3",
                name: "Aula de português 5° ano",
            }
        }
    }
        
    expect(response).toBeInstanceOf(HttpResponse)

    expect(response.body).toStrictEqual(expected_response_body)

    expect(response.status_code).toBe(200)

})