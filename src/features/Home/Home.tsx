import { bodyStyle } from '../../styles/theme/BaseTheme'
import { useFilmsList } from '../../services/features/StreamingAvailability/hooks/useFilms'
import { SearchInputCard } from './SearchInputCard'
import { SearchResults } from './SearchResults'

export const Home = () => {
  const { filmInfo } = useFilmsList({
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en'
  })
  if (filmInfo) {
    console.log(filmInfo)
  }
  return <>
        <div className={bodyStyle}>
            <SearchInputCard/>
            <SearchResults/>
        </div>
    </>
}
export default Home
