import { Message } from "./main.types";
import { User } from "./model/user.types";
import fs from 'fs'
import path from 'path'

const notificationPath = '/notifications.log'

export class Logger {
  sendSMS(user: User, message: Message) {
    const logFile = fs.createWriteStream(path.join(__dirname, notificationPath), {flags : 'a'});
    logFile.write(`${user.name}  - ${user.phone}:  ${message}\n`)
    logFile.close()
  }
  sendEmail(user: User, message: Message) {
    const logFile = fs.createWriteStream(path.join(__dirname, notificationPath), {flags : 'a'});
    logFile.write(`${user.name}  - ${user.email}:  ${message}\n`)
    logFile.close()
  }
  sendPushNotification(user: User, message: Message) {
    const logFile = fs.createWriteStream(path.join(__dirname, notificationPath), {flags : 'a'});
    logFile.write(`${user.name}  - ${"push"}:  ${message}\n`)
    logFile.close()
  }
  readAll(): string[] {
    try {
      const logData = fs.readFileSync(path.join(__dirname, notificationPath)).toString()
      return logData.split("\n").filter(line => line.length > 0)
    } catch(err) {
      return []
    }
  }
}
