import type { Request, Response } from 'express'
import searchServices from '../../services/rapidApi/searchServices'

export const getStock = async (req: Request, res: Response) => {
  const { name } = req.query
  console.log({ name })
  if (!name || typeof name !== 'string') {
    res.status(400).json({ error: 'Stock name is required and should be a string' })
    return
  }

  try {
    const data = await searchServices.fetchStockSeacrh({ name })
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}

export const getIndustry = async (req: Request, res: Response) => {
  const { query } = req.query
  console.log({ query })
  try {
    if (!query || typeof query !== 'string') {
      res.status(400).json({ error: 'Industry name is required and should be a string' })
      return
    }
    const data = await searchServices.fetchIndustrySearch({ query })
    console.log(data)
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}

export const getMutualFund = async (req: Request, res: Response) => {
  const { query } = req.query

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Mutual fund name is required and should be a string' })
  }

  try {
    const data = await searchServices.fetchMutualFundSearch({ query })
    return res.status(200).json(data)
  } catch (error: any) {
    return res.status(500).json({ error: error.message })
  }
}
