import express from 'express'
import options from '../controllers/options'
const router = express.Router()

router.get('/historical', options.getHistoricalOptions)

export default router
