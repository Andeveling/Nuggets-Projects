export interface MoviesSearchResponseI {
  Response: string
  Search: MovieApiI[]
  totalResults: string
}

export interface MovieApiI {
  Poster: string
  Title: string
  Type: Type
  Year: string
  imdbID: string
}

export interface MovieI {
  id: string
  title: string
  poster: string
  type: Type
  year: string
}

export enum Type {
  Game = "game",
  Movie = "movie",
}
export interface NoSearchResultsI {
  Response: string
  Error: string
}
