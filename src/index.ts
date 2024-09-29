import express from 'express'
import type { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
import createError from 'http-errors'
// import { logIssues } from './checks'
import indexRouter from './routes/index'
import errorMessage from './constants/errorMessage'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT || 3333
const localhost = process.env.LOCALHOST_URL
const frontEndDomain = process.env.FRONTEND_URL

const allowedOrigins = [localhost, frontEndDomain]
console.log({ frontEndDomain, localhost })
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  next()
})

app.use('/api', indexRouter)

// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404))
})

// Error handler
app.use((err: any, req: Request, res: Response) => {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    message: errorMessage.INTERNAL_SERVER_ERROR,
  })
})

app.listen(port, () => {
  console.log(`Server is running on posrt ${port}`)
})

// logIssues()
