import { DirectNotifier } from "./_direct";
import { userModel } from '../model/user'
import { User, PageToken } from "../model/user.types"
import { Category, NotificationType, Message } from "../main.types"

export class EmailNotifier extends DirectNotifier {
  getUsers(cateogry: Category, pageToken:PageToken | null) {
    return userModel.findByCategoryAndType(NotificationType.EMAIL, cateogry, pageToken)
  }
  sendToUsers(users: User[], message: Message) {
    users.forEach(user => this.logger.sendEmail(user, message))
  }
}
