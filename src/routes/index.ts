import express from 'express'
const router = express.Router()
import timeSeries from './alphaVantage/timeSeries'
import utility from './alphaVantage/utility'
import options from './alphaVantage/options'

import rapidApiSearch from './rapidApi/searchRoutes'
import mostActiveStock from './rapidApi/mostActiveStock'

// Alpha-Vantage routes
router.use('/time-series', timeSeries)
router.use('/utility', utility)
router.use('/options', options)

// Rapid-API routes
router.use('/search', rapidApiSearch)
router.use('/most-active-stock', mostActiveStock)

export default router
