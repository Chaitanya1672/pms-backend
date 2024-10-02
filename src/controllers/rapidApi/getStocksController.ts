import { fetchTrendingStocks, fetchWeekHighLowData } from '../../services/rapidApi/getStocksService'
import type { Request, Response } from 'express'

export const getTrendingStocks = async (req: Request, res: Response) => {
  try {
    const data = await fetchTrendingStocks()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending stocks' })
  }
}

export const getWeekHighLowStocks = async (req: Request, res: Response) => {
  try {
    const data = await fetchWeekHighLowData()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch 52-week high/low data' })
  }
}
