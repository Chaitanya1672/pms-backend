import express from 'express'
import {
  getTrendingStocks,
  getWeekHighLowStocks,
} from '../../controllers/rapidApi/getStocksController'

const router = express.Router()

router.get('/trending', getTrendingStocks)
router.get('/52-week-high-low', getWeekHighLowStocks)

export default router
