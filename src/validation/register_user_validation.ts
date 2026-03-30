import * as z from "zod"
import { IUser } from "../types/user";

export function register_user_validation({name, email, password, section, grade, role}: IUser){
    
    const user_schema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.string(),
        section: z.string(),    
        grade: z.string(),
        role: z.string()
    })

    try{        
        
        const user_validation = user_schema.parse({name, email, password, section, grade, role})

        console.log(user_validation)

    }catch(error){ 
        
        if(error instanceof z.ZodError){
            console.log(error.issues)
        }

    }
}

