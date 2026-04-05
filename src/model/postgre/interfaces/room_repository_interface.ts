import { CreateInput } from '../types/room_repository_input';
import { CreateOutput } from '../types/room_repository_output';

export interface IRoomRepository{

    create: ({name, room_code}: CreateInput) => Promise<CreateOutput>

    findByCode: (code: string)=> Promise<CreateOutput | null>

}