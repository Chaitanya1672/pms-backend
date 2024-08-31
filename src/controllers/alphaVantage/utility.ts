import type { Request, Response } from 'express'
import utility from '../../services/alphaVantage/utility'
import type { IDataType } from '../../types/alphaVantage/timeSeries'

const getSymbolSearch = async (req: Request, res: Response) => {
  const { keywords, datatype } = req.query

  try {
    const data = await utility.fetchSymbolSearch({
      keywords: keywords as string,
      datatype: datatype as IDataType,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=symbol_search_${keywords}.csv`)
      return res.send(data)
    }
    return res.json({
      message: 'Symbol searched successfully!',
      data: data,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch symbol search data' })
  }
}

const getGlobalMarketStatus = async (req: Request, res: Response) => {
  try {
    const data = await utility.fetchMarketStatus()
    return res.json({
      message: 'Market status fetched successfully!',
      data: data,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market status data' })
  }
}

export default {
  getSymbolSearch,
  getGlobalMarketStatus,
}
