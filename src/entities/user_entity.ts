export class UserEntity{

  id?: string
  number?: number
  created_at?: Date
  
  email: string 
  name: string
  password: string
  section: string
  grade: string
  role: string

  constructor(name: string, email: string, password: string, section: string, grade: string, role: string,id?: string, number?: number, created_at?: Date){

    this.id = id
    this.number = number
    this.created_at = created_at
    this.name = name
    this.email = email
    this.password = password
    this.section = section
    this.grade = grade
    this.role = role
    
  }

}