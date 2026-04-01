import express from "express"
import path from "path"
import http from "http"
import { setupSocket } from "../socket/socket"

const app = express()

const server = http.createServer(app)

// injeta o server no socket
setupSocket(server)

app.get("/professor", (req, res) => {
  res.sendFile(path.resolve("template/professor.html"))
})

app.get("/aluno", (req, res) => {
  res.sendFile(path.resolve("template/aluno.html"))
})

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})