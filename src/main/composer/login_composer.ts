import { LoginController } from "../../controller/login_controller/login_controller";
import { UserRepository } from "../../model/postgre/user_repository";
import { LoginUseCase } from "../../use_case/login_use_case/login_use_case";

export function loginComposer(){

    const repository = new UserRepository()
    const use_case = new LoginUseCase(repository)
    const controller = new LoginController(use_case)

    return controller

}