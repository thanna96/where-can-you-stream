import { AxiosResponse } from 'axios'
import { api } from '../../api'
import { Countries } from './types/Countries'

class CountryService {
  /**
     * Get a map of which countries are supported for each streaming service
     */
  public getCountries = async (): Promise<AxiosResponse<Countries>> =>
    api().get('countries')
}

export default CountryService
