import axios from 'axios'
import type { IHistoricalOptionsParams } from '../../types/alphaVantage/utilityOptions'
import { appConfig } from '../../config'
import { optionsHistoricalData } from '../../constants/alphaVantage'

const BASE_URL: string = appConfig.alphaVantageBaseUrl
const API_KEY: string = appConfig.alphaVantageApiKey

const fetchHistoricalOptions = async ({
  symbol,
  date,
  datatype = 'json',
}: IHistoricalOptionsParams): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: optionsHistoricalData,
        symbol,
        date,
        apikey: API_KEY,
        datatype,
      },
      responseType: datatype === 'csv' ? 'text' : 'json',
    })

    return response.data
  } catch (error) {
    console.error('Error fetching historical options data:', error)
    throw new Error('Failed to fetch historical options data')
  }
}

export default {
  fetchHistoricalOptions,
}
