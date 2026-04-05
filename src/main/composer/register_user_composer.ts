import { RegisterController } from "../../controller/register_controller/register_controller";
import { UserRepository } from "../../model/postgre/user_repository";
import { RegisterUserUseCase } from "../../use_case/register_use_case/register_user_case";

export function registerUserComposer(){

    const repository = new UserRepository()
    const use_case = new RegisterUserUseCase(repository)
    const controller = new RegisterController(use_case)

    return controller

}