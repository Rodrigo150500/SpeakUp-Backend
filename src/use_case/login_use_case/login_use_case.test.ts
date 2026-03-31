import {test, expect} from "vitest"
import { LoginUseCase } from "./login_use_case"
import { UserRepository } from "../../model/postgre/user_repository"
import { HttpRequest } from "../../main/http/http_request"
import { HttpResponse } from "../../main/http/http_response"

test("Should valid credentials", async ()=>{

    const repository = new UserRepository()
    const use_case = new LoginUseCase(repository)

    const body = {
        email: "rodrigo.takara1505@gmail.com",
        password: "123"
    }

    const http_request = new HttpRequest(body)

    const response = await use_case.handle(http_request)

    const expected_response_body = {
        data: {
            operation: "Get",
            count: 1,
            attributes: {
                created_at: expect.any(Date),
                email: "rodrigo.takara1505@gmail.com",
                grade: "5°",
                name: "Rodrigo",
                number: 25,
                role: "Aluno",
                section: "B",
                id: "0215fc99-92ec-4f55-80a1-9d0db03e6887"
            }
        }
    }

    expect(response).toBeInstanceOf(HttpResponse)

    expect(response.body).toStrictEqual(expected_response_body)

    expect(response.status_code).toBe(200)


})