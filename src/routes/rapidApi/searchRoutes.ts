import { Router } from 'express'
import { getIndustry, getMutualFund, getStock } from '../../controllers/rapidApi/searchController'

const router = Router()

router.get('/stock', getStock)
router.get('/industry', getIndustry)
router.get('/mutual-fund', getMutualFund)

export default router
