import { getAllPokemons } from "@/services/Pokemon.service"
import React, { createContext, useContext, useEffect, useState } from "react"

export const PokemonContext = createContext({ pokemons: [] })
export const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getAllPokemons({ limit: 20, offset }).then((data: any) => setPokemons(data))
  }, [])
  return <PokemonContext.Provider value={{ pokemons }}>{children}</PokemonContext.Provider>
}

export const usePokemons = () => {
  const { pokemons } = useContext(PokemonContext)
  return { pokemons }
}
