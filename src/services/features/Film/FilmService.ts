import { AxiosResponse } from 'axios'
import { api } from '../../api'
import { IFilm } from './types/Film'

class FilmService {
  public getFilmInfo = async (params: any): Promise<AxiosResponse<IFilm>> =>
    api().get('/basic', { params })
}

export default FilmService
