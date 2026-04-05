import {test} from 'vitest'
import { RoomRepository } from '../../model/postgre/room_repository'
import { JoinRoomUseCase } from '../../use_case/join_room_use_case/join_room_use_case'
import { JoinRoomController } from './joint_room_controller'

import express from "express"
import request from 'supertest'


test("Should return a valid room", async () => {

  const app = express()
  app.use(express.json())

  const repository = new RoomRepository()
  const use_case = new JoinRoomUseCase(repository)
  const controller = new JoinRoomController(use_case)


  app.get('/room/join', (req, res) => controller.execute(req, res))

  const response = await request(app).get('/room/join').send({
    room_code: '15487'
  })

  console.log(response)


})