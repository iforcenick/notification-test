import { User } from "../model/user.types"
import { Message } from "../main.types"

export interface ExternalService {
  sendToUsers(users: User[], message: Message)
}
