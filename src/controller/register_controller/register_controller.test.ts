import request from "supertest"
import express from "express"

import {test, expect} from 'vitest'
import { UserRepository } from "../../model/postgre/user_repository"
import { RegisterUserUseCase } from "../../use_case/register_use_case/register_user_case"
import { RegisterController } from "./register_controller"

test("Should create student user (integration)", async () => {

  const app = express()
  app.use(express.json())

  const repository = new UserRepository()
  const use_case = new RegisterUserUseCase(repository)
  const controller = new RegisterController(use_case)

  app.post("/register", (req, res) => controller.execute(req, res))

  const response = await request(app)
    .post("/register")
    .send({
      role: "STUDENT",
      name: "Rodrigo Takara",
      email: "teste@email.com",
      password: "123456",
      grade: "1° colegial",
      section: "B"
    })

  expect(response.status).toBe(201)

  expect(response.body).toMatchObject({
    operation: "Insert",
    count: 1
  })
})