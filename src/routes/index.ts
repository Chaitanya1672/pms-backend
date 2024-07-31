import express from 'express'
const router = express.Router()
import timeSeries from './timeSeries'
import utility from './utility'

router.use('/time-series', timeSeries)
router.use('/utility', utility)

export default router
