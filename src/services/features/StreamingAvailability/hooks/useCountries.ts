import { useQuery } from '@tanstack/react-query'
import CountryService from '../CountryService'

export const useCountries = (isEnabled: boolean = false) => {
  const { data, isFetching } = useQuery(
    ['films'],
    async () => {
      const countryService = new CountryService()
      const film = await countryService.getCountries()

      return film.data
    },
    { enabled: isEnabled }
  )
  return {
    countries: data,
    countriesIsFetching: isFetching
  }
}
