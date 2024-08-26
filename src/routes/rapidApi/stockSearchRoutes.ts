import { Router } from 'express'
import { getIndustry, getStock } from '../../controllers/rapidApi/stockSearchController'

const router = Router()

router.get('/stock-search', getStock)
router.get('/industry-search', getIndustry)

export default router
