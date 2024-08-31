import express from 'express'
import utility from '../../controllers/alphaVantage/utility'
const router = express.Router()

router.get('/search', utility.getSymbolSearch)
router.get('/market-status', utility.getGlobalMarketStatus)
export default router
