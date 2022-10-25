export type PageToken = {
  header: 0,
  limit: 3
}

export type User = {
  id: string,
  name: string,
  email: string,
  phone: string,
  subscribed: number[],
  channels: number[]
}
