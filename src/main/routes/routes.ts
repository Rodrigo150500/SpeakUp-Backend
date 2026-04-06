import path from "path"
import { Express } from "express"
import { registerUserComposer } from "../composer/register_user_composer"
import { loginComposer } from "../composer/login_composer"
import { createRoomComposer } from "../composer/create_room_composer"
import { joinRoomComposer } from "../composer/join_room_composer"

export function Routes(app: Express){

    //only for tests
    // app.get("/professor", (req, res) => {
    //   res.sendFile(path.resolve("template/professor.html"))
    // })

    //only for tests
    // app.get("/aluno", (req, res) => {
    //     res.sendFile(path.resolve("template/aluno.html"))
    // })
    
    app.post('/auth/register', (req, res) => registerUserComposer().execute(req, res))

    app.post('/auth/login', (req, res) => loginComposer().execute(req, res))

    app.post('/room/create', (req, res) => createRoomComposer().execute(req, res))

    app.post('/room/join', (req, res) => joinRoomComposer().execute(req, res))

}