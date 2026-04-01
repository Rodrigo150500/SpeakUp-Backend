import express from "express"
import http from "http"
import path from "path"
import { fileURLToPath } from "url"

import { Server } from "socket.io"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const server = http.createServer(app)


app.get("/professor", (req, res) => {
  res.sendFile(path.resolve("template/professor.html"))
})

app.get("/aluno", (req, res) => {
  res.sendFile(path.resolve("template/aluno.html"))
})

const io = new Server(server, {
  cors: { origin: "*" }
})

io.on("connection", (socket) => {

  console.log(`Usuário conectado: ${socket.id}`)

  // 👨‍🏫 Professor entra
  socket.on("join_as_professor", ({ roomCode }) => {

    socket.join(`professor_room_${roomCode}`)
    console.log("Professor conectado na sala:", roomCode)

  })

  // 👨‍🎓 Aluno entra
  socket.on("join_room", ({ roomCode }) => {

    socket.join(roomCode)
    console.log("Aluno entrou na sala:", roomCode)

  })

  // 💬 Aluno envia mensagem
  socket.on("send_message", ({ roomCode, message }) => {

    console.log("Mensagem recebida:", message)

    io.to(`professor_room_${roomCode}`).emit("receive_message", {
      message
    })

  })

})

// 🔥 ISSO QUE FALTAVA
server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})