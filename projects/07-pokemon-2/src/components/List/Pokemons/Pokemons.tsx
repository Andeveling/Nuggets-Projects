import { usePokemons } from "@/context/PokemonContext"
import { Pokemon } from "pokenode-ts"
import { PokemonTypeBadge } from "../PokemonsTypes"

const PokemonsList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <ul className='grid w-full grid-cols-1 gap-4 px-2 py-10 '>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className='z-0 grid self-center h-32 max-w-sm grid-cols-2 shadow-xl card bg-base-300'>
          <figure className=''>
            <img src={pokemon.sprites.front_default as string} alt={`Image of ${pokemon.name}`} />
          </figure>
          <div>
            <div className='card-body'>
              <h2 className='capitalize card-title'>{pokemon.name}</h2>
              <div>
                <PokemonTypeBadge pokemonTypes={pokemon.types} />
              </div>
            </div>
          </div>
          <span className='absolute flex items-center justify-center w-full h-full text-center text-9xl offset-0 text-base-100 -z-20'>
            #00{pokemon.id}
          </span>
        </li>
      ))}
    </ul>
  )
}

const PokemonsError = () => {
  return <p>Something went wrong</p>
}

export const Pokemons = () => {
  const { pokemons } = usePokemons()
  return pokemons.length ? <PokemonsList pokemons={pokemons} /> : <PokemonsError />
}
