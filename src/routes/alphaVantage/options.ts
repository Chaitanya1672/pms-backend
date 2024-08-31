import express from 'express'
import options from '../../controllers/alphaVantage/options'
const router = express.Router()

router.get('/historical', options.getHistoricalOptions)

export default router
