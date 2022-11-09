import TextField from '@mui/material/TextField'
import { bodyStyle } from '../../styles/theme/BaseTheme'
import { Box, Card } from '@mui/material'
import { useFilmsList } from '../../services/features/StreamingAvailability/hooks/useFilms'
import Button from '@mui/material/Button'

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
            <Box
                component="form"
                className='py-16 text-center'
                noValidate
                autoComplete="off"
            >
                <Card variant="outlined" className={'p-8 max-w-md mx-auto'}>
                    <TextField className={'w-full'} label="Search Movie or Show" variant="outlined"/>
                    <div className={'text-right pt-2'}>
                        <Button variant="outlined">Search</Button>
                    </div>
                </Card>
            </Box>
        </div>
    </>
}
export default Home
