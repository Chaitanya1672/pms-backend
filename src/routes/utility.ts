import express from 'express'
import utility from '../controllers/utility'
const router = express.Router()

router.get('/search', utility.getSymbolSearch)
// router.get('/global-market', timeSeries.getDailyData)
export default router
