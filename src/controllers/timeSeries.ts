import errorMessages from '../constants/errorMessage'
import type { Request, Response } from 'express'
import timeSeries from '../services/timeSeries'

const fetchIntraDayData = async (req: Request, res: Response) => {
  const { interval, symbol, outputsize, month, datatype } = req.query

  try {
    const timeSeriesData = await timeSeries.fetchDataByTimeSeriesIntraday({
      interval: interval as string,
      symbol: symbol as string,
      outputsize: outputsize as 'compact' | 'full' | undefined,
      month: month as string | undefined,
      datatype: datatype as 'json' | 'csv' | undefined,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=${symbol}_intraday.csv`)
      return res.send(timeSeriesData)
    }

    return res.json({
      message: 'Time Series data returned successfully!',
      data: timeSeriesData,
    })
  } catch (error) {
    console.error('Error in fetchIntraday:', error)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessages.INTERNAL_SERVER_ERROR,
    })
  }
}

export default {
  fetchIntraDayData,
}
