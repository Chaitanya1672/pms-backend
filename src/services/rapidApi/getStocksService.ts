import axios from 'axios'
import { appConfig } from '../../config'
import { FETCH_52_WEEK_HIGH_LOW, TRENDING_STOCKS } from '../../constants/rapidApi'
const BASE_URL: string = appConfig.rapidApiBaseUrl
const API_KEY: string = appConfig.rapidApiKey
const HOST_URL: string = appConfig.rapidApiHost

export const fetchTrendingStocks = async () => {
  const url = `${BASE_URL}/${TRENDING_STOCKS}`
  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST_URL,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching trending stocks:', error)
    throw new Error('Unable to fetch trending stocks')
  }
}

export const fetchWeekHighLowData = async () => {
  const url = `${BASE_URL}/${FETCH_52_WEEK_HIGH_LOW}`

  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': HOST_URL,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching 52-week high/low data:', error)
    throw new Error('Unable to fetch 52-week high/low data')
  }
}
