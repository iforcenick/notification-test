import { ExternalService } from "./_externalservice.types";
import { User } from "../model/user.types"
import { Message } from "../main.types"
import { Logger } from '../logger'

export class CloudService implements ExternalService {
  logger: Logger
  constructor(_logger: Logger) {
    this.logger = _logger
  }
  sendToUsers(users: User[], message: Message) {
    users.forEach(user => this.logger.sendPushNotification(user, message))
  }
}
