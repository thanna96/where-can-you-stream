import axios from 'axios'

export const baseURL = 'https://streaming-availability.p.rapidapi.com/'

function createApi (route: string) {
  return axios.create({
    baseURL: baseURL + route,
    timeout: 125_000,
    withCredentials: true,
    headers: {
      'X-RapidAPI-Key': import.meta.env.X_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.X_RAPID_API_HOST
    }
  })
}

export const api = (route: string = '/') => createApi(route)
