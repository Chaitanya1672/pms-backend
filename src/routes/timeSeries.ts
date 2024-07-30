import express from 'express'
import timeSeries from '../controllers/timeSeries'
const router = express.Router()

router.get('/time', timeSeries.fetchIntraDayData)

export default router
