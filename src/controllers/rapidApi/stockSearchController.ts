import type { Request, Response } from 'express'
import stockServices from '../../services/rapidApi/stockSearch'

export const getStock = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.query

  if (!name || typeof name !== 'string') {
    res.status(400).json({ error: 'Stock name is required and should be a string' })
    return
  }

  try {
    const data = await stockServices.fetchStockSeacrh({ name })
    res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getIndustry = async () => {
  try {
    const data = await stockServices.fetchIndustrySearch({ query: 'tata' })
    console.log(data)
  } catch (error: any) {
    console.error('Error:', error.message)
  }
}
