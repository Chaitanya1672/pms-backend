import type { Request, Response } from 'express'
import options from '../services/options'
import type { IDataType } from '../types/timeSeries'

const getHistoricalOptions = async (req: Request, res: Response) => {
  const { symbol, date, datatype } = req.query

  try {
    const data = await options.fetchHistoricalOptions({
      symbol: symbol as string,
      date: date as string,
      datatype: datatype as IDataType,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader(
        'Content-Disposition',
        `attachment; filename=${symbol}_options_${date || 'latest'}.csv`
      )
      return res.send(data)
    }
    res.json({
      message: 'Historical options fetched successfully!',
      data: data,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch historical options data' })
  }
}

export default {
  getHistoricalOptions,
}
