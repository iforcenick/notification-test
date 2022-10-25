import express from 'express'
import { Logger } from './logger'
import { EmailNotifier, SMSNotifier, PushNotifier } from './notifier'
import fs from 'fs'
import path from 'path'

const logger = new Logger()
const emailNotifier = new EmailNotifier(logger)
const smsNotifier = new SMSNotifier(logger)
const pushNotifier = new PushNotifier(logger)

const app = express()

app.use(express.json())
app.use(express.urlencoded())


app.get('/submit', (req, res) => {
  let { category, message } = req.query
  message = message || ""
  if(message.length == 0) {
    res.status(400).send()
    return
  }
  const categoryParam = Number(category)
  emailNotifier.sendNotification(categoryParam, message)
  smsNotifier.sendNotification(categoryParam, message)
  pushNotifier.sendNotification(categoryParam, message)

  const html = fs.readFileSync(path.join(__dirname, "/public/submit.html")).toString()
  res.send(html)
})
app.get("/", (req, res) => {
  const html = fs.readFileSync(path.join(__dirname, "/public/index.html")).toString()
  res.send(html.replace("**", logger.readAll().map(log => `<li>${log}</li>`).join("\n")))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});
