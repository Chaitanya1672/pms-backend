import express from 'express'
const router = express.Router()
import timeSeries from './timeSeries'

router.use('/time-series', timeSeries)

export default router
