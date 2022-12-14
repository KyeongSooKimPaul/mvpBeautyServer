import { verify } from 'jsonwebtoken'
import { Context } from './context'

// export const APP_SECRET = 'appsecret321'
export const APP_SECRET =
  "WLU{Ba[^!({9?ZZvO4TkNZg`jOply/3:sOLK}Obx:&L_@'G`DGO+/Li/5Ju?l,U"

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}
