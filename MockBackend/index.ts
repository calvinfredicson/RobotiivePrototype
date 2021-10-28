import { Account } from "../Data/loginInfo"
import { delay } from "../utilityFunctions"

let initialLogin = true

const enum message {
  success = "Ok",
  failed = "Wrong Email or Password"
}

interface CheckLoginReturn {
  status: boolean,
  message: string
}

export async function checkLogin(email: string, password: string): Promise<CheckLoginReturn> {
  await delay(5)
  if (Account.email == email && Account.password == password) {
    if (!initialLogin) {
      initialLogin = !initialLogin
      return { status: true, message: message.success }
    } else {
      initialLogin = !initialLogin
      return { status: false, message: "" }
    }
  } else {
    return { status: false, message: message.failed }
  }
}