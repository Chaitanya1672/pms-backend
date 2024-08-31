import axios from 'axios'
import { appConfig } from '../../config'
import { BSE_MOST_ACTIVE, NSE_MOST_ACTIVE } from '../../constants/rapidApi'
const BASE_URL: string = appConfig.rapidApiBaseUrl
const API_KEY: string = appConfig.rapidApiKey
const HOST_URL: string = appConfig.rapidApiHost

const fetchMostActiveBSEStocks = async () => {
  try {
    const url = `${BASE_URL}/${BSE_MOST_ACTIVE}`
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST_URL,
      },
    })

    return response.data
  } catch (error) {
    throw new Error('Failed to fetch most active BSE stocks')
  }
}

const fetchMostActiveNSEStocks = async () => {
  try {
    const url = `${BASE_URL}/${NSE_MOST_ACTIVE}`
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST_URL,
      },
    })

    return response.data
  } catch (error) {
    throw new Error('Failed to fetch most active NSE stocks')
  }
}

export default {
  fetchMostActiveBSEStocks,
  fetchMostActiveNSEStocks,
}
