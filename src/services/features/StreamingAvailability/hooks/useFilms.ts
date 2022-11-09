import { useQuery } from '@tanstack/react-query'
import FilmService from '../FilmService'

export const useFilmsList = (params: any, isEnabled: boolean = false) => {
  const { data, isFetching, isLoading, isFetchedAfterMount } = useQuery(
    ['films', params],
    async () => {
      const filmService = new FilmService()
      const film = await filmService.getFilmsList(params)

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
