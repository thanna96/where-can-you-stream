export type BackdropURLsType = {
    300: string,
    780: string,
    1280: string,
    original: string,
}

export type PosterURLsType = {
    92: string,
    154: string,
    185: string,
    342: string,
    500: string,
    780: string,
    original: string,
}

export type StreamingInfoType = {
    [streamService: string]: {
        [country: string]: {
            added: number,
            leaving: number,
            link: string
        }
    }
}

export interface FilmDetails {
    age: number,
    backdropPath: string,
    backdropURLs: BackdropURLsType,
    cast: string[],
    countries: string[],
    genres: number[],
    imdbID: string,
    imdbRating: number,
    imdbVoteCount: number,
    originalTitle: string,
    overview: string,
    posterPath: string,
    posterURLs: PosterURLsType,
    runtime: number,
    significants: string[],
    streamingInfo: StreamingInfoType,
    tagline: string,
    title: string,
    tmdbID: string,
    video: string,
    year: number
}

export interface IFilmList {
    results: FilmDetails[]
}

export type getFilmsListParamType = {
    country: string,
    service: string,
    type: string,
    genre: string,
    page: string,
    output_language: string,
    language: string,
}

export type getFilmDetailsType = {
    country: string,
    output_language: string,
    tmdb_id: string,
}
