import { DirectNotifier } from "./_direct";
import { userModel } from '../model/user'
import { User, PageToken } from "../model/user.types"
import { Category, NotificationType, Message } from "../main.types"

export class SMSNotifier extends DirectNotifier {
  getUsers(cateogry: Category, pageToken:PageToken | null) {
    return userModel.findByCategoryAndType(NotificationType.SMS, cateogry, pageToken)
  }
  sendToUsers(users: User[], message: Message) {
    users.forEach(user => this.logger.sendSMS(user, message))
  }
}
