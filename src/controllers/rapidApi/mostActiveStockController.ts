import type { Request, Response } from 'express'
import mostActiveStock from '../../services/rapidApi/mostActiveStockService'

export const getMostActiveBSEStocks = async (req: Request, res: Response) => {
  try {
    const data = await mostActiveStock.fetchMostActiveBSEStocks()
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json({ error: error.message })
  }
}

export const getMostActiveNSEStocks = async (req: Request, res: Response) => {
  try {
    const data = await mostActiveStock.fetchMostActiveNSEStocks()
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json({ error: error.message })
  }
}
