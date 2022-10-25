import { BaseNotifier } from "./_base";
import { userModel } from "../model/user"
import { User } from "../model/user.types"
import { Category, Message, NotificationType } from "../main.types"
import { ExternalService } from './_externalservice.types'
import { Logger } from '../logger'

export abstract class ExternalServiceNotifier extends BaseNotifier {
  externalService
  constructor(_logger: Logger, _external: ExternalService) {
    super(_logger)
    this.externalService = _external
  }
  sendNotification(category: Category, message: Message) {
    const { users } = userModel.findByCategoryAndType(NotificationType.PUSH_NOTIFICATION, category, null)
    this.externalService.sendToUsers(users, message)
  }
}
