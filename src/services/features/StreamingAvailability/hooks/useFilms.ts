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

export const useFilmDetails = (tmdbId: string = '', isEnabled: boolean = false) => {
  const { data, isFetching } = useQuery(
    ['film', { country: 'us', tmdb_id: tmdbId, output_language: 'en' }],
    async () => {
      const filmService = new FilmService()
      const film = await filmService.getFilmDetails({ country: 'us', tmdb_id: tmdbId, output_language: 'en' })

      return film.data
    },
    { enabled: isEnabled }
  )
  return {
    filmDetails: data,
    filmIsFetching: isFetching
  }
}
