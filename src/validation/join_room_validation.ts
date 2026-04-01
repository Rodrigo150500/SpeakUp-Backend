import * as z from 'zod'

export function join_room_validation(data: unknown){

    const room_schema = z.object({
        room_code: z.string()
    }) 

    return room_schema.parse(data)

}