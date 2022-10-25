import { Category, Message } from "../main.types"
import { Logger } from '../logger'

export abstract class BaseNotifier {
  protected logger: Logger
  constructor(_logger: Logger) {
    this.logger = _logger
  }
  abstract sendNotification(category: Category, message: Message);
}
