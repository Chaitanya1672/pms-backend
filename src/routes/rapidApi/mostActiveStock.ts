import { Router } from 'express'
import {
  getMostActiveBSEStocks,
  getMostActiveNSEStocks,
} from '../../controllers/rapidApi/mostActiveStockController'

const router = Router()

router.get('/bse', getMostActiveBSEStocks)
router.get('/nse', getMostActiveNSEStocks)

export default router
