import { RegisterUserDTO, RegisterUserResponseDTO } from '../register_user_dto'

export interface IRegisterUseCase{

  handle: (data: RegisterUserDTO) => Promise<RegisterUserResponseDTO>  

}