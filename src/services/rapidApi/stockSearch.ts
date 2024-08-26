import axios from 'axios'
import { appConfig } from '../../config'
import type { IStockTypeParams, IIndustrySearchParams } from '../../types/rapidApi/stockTypes'
import { SEARCH_INDUSTRY, SEARCH_STOCK } from '../../constants/rapidApi'

const BASE_URL: string = appConfig.rapidApiBaseUrl
const API_KEY: string = appConfig.rapidApiKey
const HOST_URL: string = appConfig.rapidApiHost

const fetchStockSeacrh = async ({ name }: IStockTypeParams): Promise<any> => {
  try {
    const url = `${BASE_URL}/${SEARCH_STOCK}`
    const response = await axios.get(url, {
      params: {
        name,
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST_URL,
      },
    })

    return response.data
  } catch (error) {
    console.error('Error fetching stock data:', error)
    throw new Error('Failed to fetch stock data')
  }
}

const fetchIndustrySearch = async ({ query }: IIndustrySearchParams): Promise<any> => {
  try {
    const url = `${BASE_URL}/${SEARCH_INDUSTRY}`
    const response = await axios.get(url, {
      params: {
        query,
      },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST_URL,
      },
    })

    return response.data
  } catch (error) {
    console.error('Error fetching industry search data:', error)
    throw new Error('Failed to fetch industry search data')
  }
}

export default {
  fetchStockSeacrh,
  fetchIndustrySearch,
}
