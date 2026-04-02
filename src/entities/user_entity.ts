import {Role} from "../../generated/prisma/client"

export class UserEntity {

  id?: string
  name: string
  email: string
  password: string
  created_at?: Date
  role: Role


  constructor( name: string, email: string, password: string, role: Role, created_at?: Date, id?:string,){
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.created_at = created_at
    this.role = role  

  }

}