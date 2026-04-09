import { Server } from "socket.io"
import { Server as HttpServer } from "http"

export function setupSocket(server: HttpServer) {
  const io = new Server(server, {
    cors: { origin: "*" }
  })

  io.on("connection", (socket) => {

    console.log(`Usuário conectado: ${socket.id}`)

    //Professor room

    socket.on("join_as_professor", ({ roomCode }) => {
      socket.join(`professor_room_${roomCode}`)
      console.log("Professor conectado na sala:", roomCode)
    })

    //Student room
    socket.on("join_room", ({ roomCode }) => {
      socket.join(roomCode)
      console.log("Aluno entrou na sala:", roomCode)
    })

    //Send message to professor
    socket.on("send_message", ({ roomCode, message, name, date }) => {
      console.log("Mensagem recebida:", message)

      io.to(`professor_room_${roomCode}`).emit("receive_message", {
        message,
        name,
        date
      })
    })
  })
}