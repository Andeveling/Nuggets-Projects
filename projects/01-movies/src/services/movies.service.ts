import { movieAdapter } from "@/adapters/Movies.adapter"
import { MoviesSearchResponseI } from "@/models/MoviesSearch.response"
import axios from "axios"

const API_KEY = "e09749c2"

export const getSearchMovies = async ({ search }: { search: string }) => {
  if (search === "") return null
  try {
    const response = await axios.get<MoviesSearchResponseI>(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const { data } = response
    // console.log(data)
    return data.Search.map((movie) => movieAdapter(movie))
  } catch (error) {
    throw new Error("Error searching movies")
  }
}
