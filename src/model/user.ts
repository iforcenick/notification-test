import { NotificationType, Category } from "../main.types"
import { PageToken, User } from "./user.types"
import mock from '../mock/users.json'

const CategoryMapping = {
  1: "Sports",
  2: "Finance",
  3: "Movies"
}
const TypeMapping = {
  1: "SMS",
  2: "Email",
  3: "PushNotification"
}

class UserModel {
  public findByCategoryAndType(notificationType: NotificationType, category: Category, pageToken: PageToken | null) {
    const sliceInfo = pageToken ?
      { start: pageToken.header, end: pageToken.header + pageToken.limit } :
      { start: 0, end: undefined }
    console.log(sliceInfo)
    const users = mock
      .filter((user: User) => user.subscribed.includes(CategoryMapping[category]) && user.channels.includes(TypeMapping[notificationType]))
      .slice(sliceInfo.start, sliceInfo.end)
      console.log("users", users)
    let nextPageToken = null
    if(pageToken && pageToken.header + users.length < mock.length)
      nextPageToken = { header: sliceInfo.end, limit: pageToken.limit }
    return { users: users as User[], nextPageToken: nextPageToken }
  }
}

export const userModel = new UserModel()
