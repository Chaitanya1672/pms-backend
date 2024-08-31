import errorMessages from '../../constants/errorMessage'
import type { Request, Response } from 'express'
import timeSeries from '../../services/alphaVantage/timeSeries'
import type { IDataType, IOutputSize } from '../../types/alphaVantage/timeSeries'

const getIntraDayData = async (req: Request, res: Response) => {
  const { interval, symbol, outputsize, month, datatype } = req.query

  try {
    const timeSeriesData = await timeSeries.fetchIntradayData({
      interval: interval as string,
      symbol: symbol as string,
      outputsize: outputsize as IOutputSize,
      month: month as string,
      datatype: datatype as IDataType,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=${symbol}_intraday.csv`)
      return res.send(timeSeriesData)
    }

    return res.json({
      message: 'Time Series Intraday data returned successfully!',
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

const getDailyData = async (req: Request, res: Response) => {
  const { symbol, outputsize, datatype } = req.query

  try {
    const data = await timeSeries.fetchDailyData({
      symbol: symbol as string,
      outputsize: outputsize as IOutputSize,
      datatype: datatype as IDataType,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=${symbol}_daily.csv`)
      return res.send(data)
    }

    return res.json({
      message: 'Time Series Daily data returned successfully!',
      data: data,
    })
  } catch (error) {
    console.error('Error in fetchDaily:', error)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessages.INTERNAL_SERVER_ERROR,
    })
  }
}

const getWeeklyData = async (req: Request, res: Response) => {
  const { symbol, datatype } = req.query

  try {
    const data = await timeSeries.fetchWeeklyData({
      symbol: symbol as string,
      datatype: datatype as IDataType,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=${symbol}_weekly.csv`)
      return res.send(data)
    }
    return res.json({
      message: 'Time Series Weekly data returned successfully!',
      data: data,
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessages.INTERNAL_SERVER_ERROR,
    })
  }
}

const getMonthlyData = async (req: Request, res: Response) => {
  const { symbol, datatype } = req.query

  try {
    const data = await timeSeries.fetchMonthlyData({
      symbol: symbol as string,
      datatype: datatype as 'json' | 'csv' | undefined,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=${symbol}_monthly.csv`)
      return res.send(data)
    }
    return res.json({
      message: 'Time Series Monthly data returned successfully!',
      data: data,
    })
  } catch (error) {
    console.error('Error in fetchDaily:', error)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessages.INTERNAL_SERVER_ERROR,
    })
  }
}

const getGlobalQuoteData = async (req: Request, res: Response) => {
  const { symbol, datatype } = req.query

  try {
    const data = await timeSeries.fetchGlobalQuoteData({
      symbol: symbol as string,
      datatype: datatype as IDataType,
    })

    if (datatype === 'csv') {
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename=${symbol}_quote.csv`)
      return res.send(data)
    }
    return res.json({
      message: 'Time Series GLobal Quote data returned successfully!',
      data: data,
    })
  } catch (error) {
    console.error('Error in fetch global quote:', error)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessages.INTERNAL_SERVER_ERROR,
    })
  }
}
export default {
  getIntraDayData,
  getDailyData,
  getWeeklyData,
  getMonthlyData,
  getGlobalQuoteData,
}
