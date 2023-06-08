import type { MovieI } from "@/models/MoviesSearch.response"

export const MoviesList = ({ movies }: { movies: MovieI[] }) => {
  return (
    <ul className='grid justify-center w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {movies.map((movie) => (
        <li key={movie.id} className='border shadow-xl card w-72 bg-neutral-focus border-primary'>
          <div className='items-center text-center card-body'>
            <h2 className='text-xl card-title'>{movie.title}</h2>
            <p>
              {movie.type} | {movie.year}
            </p>
          </div>
          <figure>
            <img src={movie.poster} alt={movie.title} className='w-full object-fit h-96' />
          </figure>
        </li>
      ))}
    </ul>
  )
}

export const NoMoviesResult = () => {
  return <p>Movies not found</p>
}

export const Movies = ({ movies }: { movies: MovieI[] }) => {
  const hasMovies = movies.length
  return hasMovies ? <MoviesList movies={movies} /> : <NoMoviesResult />
}
