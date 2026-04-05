import {test, expect} from "vitest"
import { RoomRepository } from '../../model/postgre/room_repository'
import { CreateRoomUseCase } from '../../use_case/create_room_use_case/create_room_use_case'
import { CreateRoomController } from './create_room_controller'

import request from 'supertest'
import express from 'express'

test("Should create a room", async () =>{
  
  const app = express()
  app.use(express.json())

  const repository = new RoomRepository()
  const use_case = new CreateRoomUseCase(repository)
  const controller = new CreateRoomController(use_case)

  app.post("/room", (req, res)=> controller.execute(req, res))

  const response = await request(app).post("/room").send({
    name: "Sala nova",
    room_code: "1548755"
  })

  console.log(response)

})