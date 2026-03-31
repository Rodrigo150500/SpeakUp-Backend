import * as z from "zod"

export function create_room_validation(data: unknown){

    const room_schema = z.object({
        name: z.string(),
        room_code: z.string()
    })

    return room_schema.parse(data)


}