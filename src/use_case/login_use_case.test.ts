import { RegisterUserUseCase } from "./login_use_case";

import { UserRepository } from "../model/postgre/user_repository";

import { HttpRequest } from "../main/http/http_request";
import { IUser } from "../types/user";

describe("RegisterUserUseCase", () => {

  it("should create new user in database", async () => {

    const repository = new UserRepository()
    const useCase = new RegisterUserUseCase(repository)

    const body: IUser = {
      name: "Rodrigo",
      email: "rodrigo.teste@gmail.com",
      grade: "5°",
      section: "B",
      password: "123",
      role: "Aluno"
    }

    const http_request = new HttpRequest<IUser>(body)

    const response = await useCase.handle(http_request)

    console.log(response)

    // expect(response.status_code).toBe(201)
    // expect(response.body?.data.operation).toBe("Insert")
    // expect(response.body?.data.attributes.email).toBe(body.email)
  })

})