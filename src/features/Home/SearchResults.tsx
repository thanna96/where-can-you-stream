import { AvailabilityTable } from './AvailabilityTable'
import { FC } from 'react'
import { ISearchResultsProps } from './types/HomeTypes'

export const SearchResults: FC<ISearchResultsProps> = ({ IMDBiDs }) => {
  return (
        <>
            {IMDBiDs?.map((imdbId) => (
                <AvailabilityTable key={imdbId} IMDBID={imdbId}/>)
            )}
        </>
  )
}
