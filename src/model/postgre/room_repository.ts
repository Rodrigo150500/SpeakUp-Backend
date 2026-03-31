import {prisma} from "../../driver/prisma"

import { RoomDTO } from "../../types/DTO/roomDTO"
import { RoomEntity } from "../../types/entity/room_entity"
import { IRoomRepository } from "./interfaces/room_repository_interface"

export class RoomRepository implements IRoomRepository{

    async create({name, room_code}: RoomDTO): Promise<RoomEntity>{

        const room = await prisma.room.create({
            data:{
                name: name,
                room_code: room_code,
                created_at: new Date()
            }
        })

        return room

    }

    async findByCode(code: string): Promise<RoomEntity | null>{

        const room = await prisma.room.findUnique({
            where:{
                room_code: code
            }
        })

        return room

    }

}