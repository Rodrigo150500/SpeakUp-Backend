import { LoginDTO, LoginResponseDTO } from '../login_dto';

export interface ILoginUseCase{


    handle: (data: LoginDTO) => Promise<LoginResponseDTO>


}