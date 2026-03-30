import * as z from "zod"

export function login_user_validation(data: unknown){

    const login_schema = z.object({
        email: z.email(),
        password: z.string()
    })

    return login_schema.parse(data)

}