
interface FieldTypeSignUp {
  username: string,
  password: string,
  name: string
}

interface FieldTypeLogin {
  username: string,
  password: string,
}

interface FieldTypeForgotPassword {
  username: string,
}

interface FieldTypeResetPassword {
  username: string,
  password: string,
}

interface FieldTypeChangePassword {
  oldPassword: string,
  password: string,
}

export type { FieldTypeLogin, FieldTypeChangePassword, FieldTypeForgotPassword, FieldTypeResetPassword, FieldTypeSignUp }
