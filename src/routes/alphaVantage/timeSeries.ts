import express from 'express'
import timeSeries from '../../controllers/alphaVantage/timeSeries'
const router = express.Router()

router.get('/time', timeSeries.getIntraDayData)
router.get('/daily', timeSeries.getDailyData)
router.get('/weekly', timeSeries.getWeeklyData)
router.get('/monthly', timeSeries.getMonthlyData)
router.get('/global-quote', timeSeries.getGlobalQuoteData)

export default router
