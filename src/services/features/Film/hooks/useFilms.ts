import { useQuery } from '@tanstack/react-query'
import FilmService from '../FilmService'

export const useFilms = (params: any, isEnabled: boolean = false) => {
  const { data, isFetching, isLoading, isFetchedAfterMount } = useQuery(
    ['films', params],
    async () => {
      const filmService = new FilmService()
      const film = await filmService.getFilmInfo(params)

      return film.data
    },
    { enabled: isEnabled }
  )
  return {
    filmInfo: data,
    filmIsFetching: isFetching,
    filmIsLoading: isLoading,
    filmIsFetchedAfterMount: isFetchedAfterMount
  }
}
