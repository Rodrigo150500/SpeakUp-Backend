import * as z from "zod"

export function register_user_validation(data: unknown) {
    
    const registerSchema = z.discriminatedUnion("role", [
    z.object({
        role: z.literal("STUDENT"),
        name: z.string(),
        email: z.string(),
        password: z.string(),
        grade: z.string(),
        section: z.string()
    }),
    z.object({
        role: z.literal("TEACHER"),
        name: z.string(),
        email: z.string(),
        password: z.string()
    })
    ])

    return registerSchema.parse(data) 
}