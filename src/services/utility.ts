import axios from 'axios'
import { appConfig } from '../config/appConfig'
import type { ISymbolSearchParams } from '../types/search'
import { utilitySymbolSearch } from '../constants/alphaVantage'

const BASE_URL: string = appConfig.alphaVantageBaseUrl
const API_KEY: string = appConfig.alphaVantageApiKey

const fetchSymbolSearch = async ({
  keywords,
  datatype = 'json',
}: ISymbolSearchParams): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: utilitySymbolSearch,
        keywords,
        apikey: API_KEY,
        datatype,
      },
      responseType: datatype === 'csv' ? 'text' : 'json',
    })

    return response.data
  } catch (error) {
    console.error('Error fetching symbol search data:', error)
    throw new Error('Failed to fetch symbol search data')
  }
}

export default {
  fetchSymbolSearch,
}
