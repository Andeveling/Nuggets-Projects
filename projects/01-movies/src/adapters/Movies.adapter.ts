import { MovieI, MovieApiI } from "@/models/MoviesSearch.response"

export const movieAdapter = (movie: MovieApiI): MovieI => {
  return {
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    poster: movie.Poster,
  }
}
