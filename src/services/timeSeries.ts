import axios from 'axios'
import { appConfig } from '../config/appConfig'
import { timeSeriesIntrday } from '../constants/alphaVantage'

interface InterfaceFetchDataParams {
  symbol?: string
  interval?: string
  outputsize?: 'compact' | 'full'
  month?: string
  datatype?: 'json' | 'csv'
}

const fetchDataByTimeSeriesIntraday = async ({
  symbol = 'IBM',
  interval = '5min',
  outputsize,
  month,
  datatype,
}: InterfaceFetchDataParams = {}) => {
  try {
    const response = await axios.get(appConfig.alphaVantageBaseUrl as string, {
      params: {
        function: timeSeriesIntrday,
        symbol,
        interval,
        apikey: appConfig.alphaVantageApiKey,
        ...(outputsize && { outputsize }),
        ...(month && { month }),
        ...(datatype && { datatype }),
      },
      ...(datatype === 'csv' && { responseType: 'text' }),
    })

    return response.data
  } catch (error: any) {
    console.error('Error in fetchDataByTimeSeriesIntraday:', error)
    throw new Error('Failed to fetch stock data')
  }
}

export default {
  fetchDataByTimeSeriesIntraday,
}
