import { BaseNotifier } from "./_base";
import { User, PageToken } from "../model/user.types"
import { Category, Message } from "../main.types"

export abstract class DirectNotifier extends BaseNotifier {
  abstract sendToUsers(users: User[], message: Message): void
  abstract getUsers(cateogry: Category, pageToken:PageToken | null)
  sendNotification(category: Category, message: Message) {
    let _nextPageToken = null
    do {
      const {users, nextPageToken} = this.getUsers(category, _nextPageToken)
      _nextPageToken = nextPageToken
      this.sendToUsers(users, message)
    } while(_nextPageToken);
  }
}
