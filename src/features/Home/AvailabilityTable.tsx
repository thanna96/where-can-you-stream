import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'
import { IAvailabilityTableProps } from './types/HomeTypes'
import { useCountries } from '../../services/features/StreamingAvailability/hooks/useCountries'
import { useFilmDetails } from '../../services/features/StreamingAvailability/hooks/useFilms'

export const AvailabilityTable: FC<IAvailabilityTableProps> = ({ IMDBID }) => {
  const { countries, countriesIsFetching } = useCountries(false)
  const { filmDetails, filmIsFetching } = useFilmDetails(IMDBID, false)

  if (countriesIsFetching || filmIsFetching) {
    return <></>
  }
  return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        {countries && Object.keys(countries)?.map((service) => (
                            <TableCell key={service}>{service}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {filmDetails?.streamingInfo && Object.keys(filmDetails?.streamingInfo)?.map((service) => (
                            <TableCell key={service} component="th" scope="row">
                                {Object.keys(service).map((country) => (country + ', '))}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
  )
}
