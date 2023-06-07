import debounce from "just-debounce-it"
import { useCallback, useId, useRef, useState } from "react"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

export default function App() {
  const searchMoviesId = useId()
  const [sort, setSort] = useState<boolean>(false)
  const { search, error, setSearch } = useSearch()
  const { movies, getMovies, isLoading } = useMovies({ search, sort })
  const formRef = useRef(null)

  // El uso de useCallback es porque en cada render se recrea la funcion
  const debouncedGetMovies = useCallback(
    debounce((search: string) => {
      getMovies(search)
    }, 300),
    [getMovies]
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getMovies(search)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => setSort(!sort)

  return (
    <div className='flex flex-col w-full'>
      <header className='flex flex-col items-center justify-center mt-10'>
        <h1 className='p-4 text-5xl font-bold text-center text-transparent from-white via-cyan-600 to-secondary bg-gradient-to-r bg-clip-text'>
          Search Movies
        </h1>
        <div>
          <form ref={formRef} onSubmit={handleSubmit} className='form'>
            <label className='label'>
              <span className='label-text'>Your favorite movie?</span>
            </label>
            <div className='join'>
              <input
                id={searchMoviesId}
                type='text'
                name='query'
                placeholder='Avengers, Matrix, Nemo...'
                className='w-full max-w-xs outline-none input input-bordered input-primary join-item outline-offset-0 focus:outline-none'
                onChange={handleChange}
                value={search}
              />

              <button className='btn btn-primary join-item' type='submit'>
                Search
              </button>
            </div>
            {error && <p className='text-xs text-error'>{error}</p>}
          </form>

          <div className='form-control'>
            <label className='cursor-pointer label'>
              <span className='label-text'>Sort A-Z</span>
              <input
                type='checkbox'
                onChange={handleSort}
                checked={sort}
                className='checkbox checkbox-primary checkbox-lg'
              />
            </label>
          </div>
        </div>
      </header>
      <main className='mx-auto'>
        {isLoading ? <span className='loading loading-ring loading-lg' /> : <Movies movies={movies} />}
      </main>
    </div>
  )
}
