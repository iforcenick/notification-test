import { User } from "../model/user.types"
import {  Message } from "../main.types"
import { ExternalServiceNotifier } from "./_externalservice";
import { Logger } from '../logger'
import { CloudService } from "./_cloud";
import { ExternalService } from "./_externalservice.types";

export class PushNotifier extends ExternalServiceNotifier {
  constructor(_logger: Logger) {
    const cloud = new CloudService(_logger)
    super(_logger, cloud as ExternalService)
  }
}
