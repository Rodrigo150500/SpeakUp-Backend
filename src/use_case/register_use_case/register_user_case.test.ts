import { RegisterUserUseCase } from "./register_user_case";

import { UserRepository } from "../../model/postgre/user_repository";

import {expect, test} from "vitest"

import { RegisterUserDTO, TeacherDTO } from './register_user_dto';

test.skip("Should create student in database", async () => {
  
  const repository = new UserRepository()
  const useCase = new RegisterUserUseCase(repository)

  const body:RegisterUserDTO = {
    name: "Rodrigo Takara",
    email: "Rodrigo.150523@gmail.com",
    password: "123456",
    grade: "8° ano",
    section: "A",
    role: 'STUDENT'
  }

  const response = await useCase.handle(body)

  const expected_response = {
    data:{
      operation: "Insert",
      count: 1,
      attributes:{
        id: expect.any(String),
        name: body.name,
        email: body.email,
        created_at: expect.any(Date),
        role: 'STUDENT',
        student: {
          id: expect.any(String),
          user_id: expect.any(String),
          grade: body.grade,
          section: body.section,
          number: expect.any(Number)
        }
      }
    }, status_code: 201
  }

  if(response.data.attributes.role == 'STUDENT'){
    expect(response).toEqual(expected_response)
  }
})

test("Should create teacher in database", async ()=>{

  const repository = new UserRepository()
  const use_case = new RegisterUserUseCase(repository)

  const teacher_data: TeacherDTO = {
    name: "Rosalina",
    email: "Rosalina.rs@gmail.com",
    password: "123456",
    role: "TEACHER"
  }

  const response = await use_case.handle(teacher_data)

  const expected_response = {
    data:{
      operation: "Insert",
      count:1,
      attributes:{
        id: expect.any(String),
        name: teacher_data.name,
        email: teacher_data.email,
        created_at: expect.any(Date),
        role: "TEACHER",
        teacher:{
          id: expect.any(String),
          user_id: expect.any(String)
        }
      }
    },
    status_code: 201
  }

  expect(response).toEqual(expected_response)

  
})