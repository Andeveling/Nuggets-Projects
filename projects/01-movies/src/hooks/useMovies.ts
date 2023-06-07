import { MovieI } from "@/models/MoviesSearch.response"
import { getSearchMovies } from "@/services/movies.service"
import { useRef, useState, useMemo, useCallback } from "react"

export const useMovies = ({ search, sort }: { search: string; sort: boolean }) => {
  const [movies, setMovies] = useState<MovieI[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  // Almacenamos el valor previo del search
  const prevSearchRef = useRef(search)

  const getMovies = useCallback(async (search: string) => {
    if (search === prevSearchRef.current) return
    try {
      setIsLoading(true)
      setError(null)
      // En caso de ser valido refrescamos el valor del prevSearch
      prevSearchRef.current = search
      const newMovies = await getSearchMovies({ search })
      if (newMovies !== null) setMovies(newMovies)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
 
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error, isLoading }
}
