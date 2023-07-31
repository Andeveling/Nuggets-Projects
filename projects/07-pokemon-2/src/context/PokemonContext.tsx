import { PokemonApi } from "@/services/Pokemon.service"
import type { Pokemon } from "pokenode-ts"
import React, { createContext, useContext, useEffect, useState } from "react"

type PokemonContextT = { pokemons: Pokemon[], totalPokemons: number }

export const PokemonContext = createContext({} as PokemonContextT)
export const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [totalPokemons, setTotalPokemons] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    ;(async () => {
      const list = await PokemonApi.listPokemons(offset)
      setTotalPokemons(list.count)
      const pokemonsPromises = list.results.map(async (pokemon) => {
        const response = await PokemonApi.getPokemonByName(pokemon.name)
       
        return response
      })
      Promise.all(pokemonsPromises).then((pokemons) => {
        setPokemons(pokemons)
      })
    })()
  }, [offset])
  return <PokemonContext.Provider value={{ pokemons, totalPokemons }}>{children}</PokemonContext.Provider>
}

export const usePokemons = () => {
  const { pokemons, totalPokemons } = useContext(PokemonContext)
  return { pokemons, totalPokemons }
}
