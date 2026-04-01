import express from "express"
import http from "http"
import path from "path"
import { fileURLToPath } from "url"
import { Server } from "socket.io"

// 👇 recria __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static(path.join(__dirname, "../../template")))

const server = http.createServer(app)

const io = new Server(server, {
  cors: { origin: "*" }
})

io.on("connection", (socket) => {
  console.log("Conectado:", socket.id)
})

server.listen(3000, () => {
  console.log("Rodando em http://localhost:3000")
})