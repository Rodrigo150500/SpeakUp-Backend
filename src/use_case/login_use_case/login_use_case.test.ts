import {test, expect} from "vitest"
import { LoginUseCase } from "./login_use_case"
import { UserRepository } from "../../model/postgre/user_repository"
import { LoginResponseDTO } from "./login_dto"


test("Should validate student credential", async ()=>{

    const repository = new UserRepository()
    const use_case = new LoginUseCase(repository)

    const student_credentials = {
        email: "Rodrigo.takara1505@gmail.com",
        password: "123456"
    }

    const response = await use_case.handle(student_credentials)

    const expected_response = {
        data:{
            operation: "Get",
            count: 1,
            attributes:{
                id: "f06f7491-9bff-4f20-a174-54af33cc8089",
                created_at: expect.any(Date),
                name: "Rodrigo",
                email: "Rodrigo.takara1505@gmail.com",
                role: "STUDENT",
                student:{
                    id: "564ccc78-5843-4656-89e7-776863602a68",
                    user_id: "f06f7491-9bff-4f20-a174-54af33cc8089",
                    grade: "5° ano",
                    number: 1,
                    section: "A"
                }
            }
        },
        status_code: 200
    }

    expect(response).toEqual(expected_response)
    

})