export type CreateStudentInput = {

  name: string
  email: string
  password: string
  role: "STUDANT"
  grade: string
  section: string

}

export type CreateTeacherInput = {
  name: string,
  email: string,
  password: string,
  role: "TEACHER"
}
