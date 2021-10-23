import { NextApiRequest, NextApiResponse } from "next"
import { Account } from "../../Data/loginInfo"
import { delay } from "../../utilityFunctions"

let initialLogin = true
let loginStatus = false

interface responseJSONType {
  permission: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<responseJSONType>) {
  switch (req.method) {
    case 'POST':
      await delay(5)
      if (Account.email == req.body.email && Account.password == req.body.password) {
        if (initialLogin) {
          res.status(200).json({ permission: false })
        } else {
          res.status(200).json({ permission: true })
          loginStatus = true
        }
      } else {
        res.status(500).json({ permission: false })
      }
      initialLogin = !initialLogin
      break
    case 'GET':
      if (!loginStatus) {
        res.status(200).json({ permission: false })
      } else {
        res.status(200).json({ permission: true })
      }
  }
}