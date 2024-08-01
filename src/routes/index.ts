import express from 'express'
const router = express.Router()
import timeSeries from './timeSeries'
import utility from './utility'
import options from './options'

router.use('/time-series', timeSeries)
router.use('/utility', utility)
router.use('/options', options)

export default router
