import request from 'supertest'
import express from 'express'
import {test, expect} from "vitest"
import { UserRepository } from '../../model/postgre/user_repository'
import { LoginUseCase } from '../../use_case/login_use_case/login_use_case'
import { LoginController } from './login_controller'


test("Should validate credentials", async ()=> {

  const app = express()
  app.use(express.json())


  const repository = new UserRepository()
  const use_case = new LoginUseCase(repository)
  const controller = new LoginController(use_case)

  app.post("/auth/login", (req, res) => controller.execute(req, res))

  const response = await request(app).post("/auth/login").send({
    email: "Rodrigo.takara1505@gmail.com",
    password: "123456"
    
  })

  expect(response.status).toBe(200)

  expect(response.body).toMatchObject({
    operation: "Get",
    count:1
  })

})