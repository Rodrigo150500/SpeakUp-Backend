import {prisma} from "../../driver/prisma"

import { IRoomRepository } from "./interfaces/room_repository_interface"
import { CreateInput } from './types/room_repository_input'
import { CreateOutput } from './types/room_repository_output'

export class RoomRepository implements IRoomRepository{

    async create({name, room_code}: CreateInput):Promise<CreateOutput>{

        const room = await prisma.room.create({
            data:{
                name: name,
                room_code: room_code,
                created_at: new Date()
            }
        })

        return room

    }

    async findByCode(code: string): Promise<CreateOutput | null>{

        const room = await prisma.room.findUnique({
            where:{
                room_code: code
            }
        })

        if(!room){
            return null
        }

        return room

    }

}
