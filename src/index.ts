import express from 'express'
const app = express()
import dotenv from 'dotenv'
import { logIssues } from './checks'
dotenv.config()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

logIssues()
