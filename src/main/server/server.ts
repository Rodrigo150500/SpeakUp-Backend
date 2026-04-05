import express from "express"
import http from "http"

import { setupSocket } from "../socket/socket"
import { Routes } from "../routes/routes"

export const app = express()

app.use(express.json())

const server = http.createServer(app)

setupSocket(server)

Routes(app)

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})