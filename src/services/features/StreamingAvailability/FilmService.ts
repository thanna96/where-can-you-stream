import { AxiosResponse } from 'axios'
import { api } from '../../api'
import { FilmDetails, getFilmDetailsType, getFilmsListParamType, IFilmList } from './types/Film'

class FilmService {
  /**
     * Search through catalog of a service in the given country.
     * Provides filters such as show language, genre and keyword.
     * Items per page is 8. Output includes all the information about
     * the shows, such as title, IMDb ID, TMDb ID, IMDb rating, link to shows'
     * pages in streaming services, cast, runtime, poster and many more!
     * Apart from the info about the given country-service combination,
     * output also includes information about availability in other services for the given country.
     * @param params
     */
  public getFilmsList = async (params: getFilmsListParamType): Promise<AxiosResponse<IFilmList>> =>
    api().get('search/basic', { params })

  /**
     * Get streaming availability information of a show in a country via either
     * a TMDb ID or an IMDb ID. TMDb IDs should be formatted like: tv/71712 or
     * movie/464052. The output also includes other information of the show such
     * as IMDb rating, original title etc.
     * @param params
     */
  public getFilmDetails = async (params: getFilmDetailsType): Promise<AxiosResponse<FilmDetails>> =>
    api().get('get/basic', { params })
}

export default FilmService
