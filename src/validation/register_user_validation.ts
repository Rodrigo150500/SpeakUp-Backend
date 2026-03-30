import * as z from "zod"
import { IUser } from "../types/user";

export function register_user_validation(data: unknown) {
    
    const user_schema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        section: z.string(),    
        grade: z.string(),
        role: z.string()
    })

    return user_schema.parse(data) // 🔥 RETORNA
}