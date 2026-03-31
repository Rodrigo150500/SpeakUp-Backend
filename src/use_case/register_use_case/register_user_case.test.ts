import { RegisterUserUseCase } from "./register_user_case";

import { UserRepository } from "../../model/postgre/user_repository";

import { HttpRequest } from "../../main/http/http_request";
import { IUser } from "../../types/user";

import {expect, test} from "vitest"
import { HttpResponse } from "../../main/http/http_response";

test("Should create user in database", async () => {
  
  const repository = new UserRepository()
  const useCase = new RegisterUserUseCase(repository)

  const body: IUser = {
    name: "Rodrigo",
    email: "rodrigo.takara1505@gmail.com",
    grade: "5°",
    section: "B",
    password: "123",
    role: "Aluno"
  }

  const http_request = new HttpRequest(body)

  const response = await useCase.handle(http_request)

  const {password, ...safeData} = body

  const expected_response = {
    data: {
      operation: 'Insert',
      count: 1,
      attributes: safeData
    }
  }

  expect(response).toBeInstanceOf(HttpResponse)

  expect(response.body).toStrictEqual(expected_response)

  expect(response.status_code).toBe(201)

})