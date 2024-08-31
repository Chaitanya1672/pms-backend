import axios from 'axios'
import { appConfig } from '../../config'
import type {
  IDailyParams,
  IGlobalQuoteParams,
  IIntraDayParams,
  IMonthlyParams,
  IWeeklyParams,
} from '../../types/alphaVantage/timeSeries'
import {
  timeSeriesDaily,
  timeSeriesGlobalQuote,
  timeSeriesIntrday,
  timeSeriesMonthly,
  timeSeriesWeekly,
} from '../../constants/alphaVantage'

const BASE_URL: string = appConfig.alphaVantageBaseUrl
const API_KEY: string = appConfig.alphaVantageApiKey

const fetchIntradayData = async ({
  symbol = 'IBM',
  interval = '5min',
  outputsize,
  month,
  datatype,
}: IIntraDayParams = {}) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: timeSeriesIntrday,
        symbol,
        interval,
        apikey: API_KEY,
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

const fetchDailyData = async ({
  symbol,
  outputsize = 'compact',
  datatype = 'json',
}: IDailyParams) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: timeSeriesDaily,
        symbol,
        outputsize,
        apikey: API_KEY,
        datatype,
      },
      responseType: datatype === 'csv' ? 'text' : 'json',
    })

    return response.data
  } catch (error) {
    console.error('Error fetching daily time series data:', error)
    throw new Error('Failed to fetch daily time series data')
  }
}

const fetchWeeklyData = async ({ symbol, datatype = 'json' }: IWeeklyParams) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: timeSeriesWeekly,
        symbol,
        apikey: API_KEY,
        datatype,
      },
      responseType: datatype === 'csv' ? 'text' : 'json',
    })

    return response.data
  } catch (error) {
    console.error('Error fetching weekly time series data:', error)
    throw new Error('Failed to fetch weekly time series data')
  }
}

const fetchMonthlyData = async ({ symbol, datatype = 'json' }: IMonthlyParams) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: timeSeriesMonthly,
        symbol,
        apikey: API_KEY,
        datatype,
      },
      responseType: datatype === 'csv' ? 'text' : 'json',
    })

    return response.data
  } catch (error) {
    console.error('Error fetching monthly time series data:', error)
    throw new Error('Failed to fetch monthly time series data')
  }
}

const fetchGlobalQuoteData = async ({
  symbol,
  datatype = 'json',
}: IGlobalQuoteParams): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: timeSeriesGlobalQuote,
        symbol,
        apikey: API_KEY,
        datatype,
      },
      responseType: datatype === 'csv' ? 'text' : 'json',
    })

    return response.data
  } catch (error) {
    console.error('Error fetching global quote data:', error)
    throw new Error('Failed to fetch global quote data')
  }
}
export default {
  fetchIntradayData,
  fetchDailyData,
  fetchWeeklyData,
  fetchMonthlyData,
  fetchGlobalQuoteData,
}
