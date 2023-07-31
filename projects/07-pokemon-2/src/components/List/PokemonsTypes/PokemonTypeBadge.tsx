import { PokemonType } from "pokenode-ts"

export const PokemonTypeBadge = ({ pokemonTypes }: { pokemonTypes: PokemonType[] }) => {
 console.log(pokemonTypes)
  return (
    <ul className="space-x-1">
      {pokemonTypes.map((item) => (
        <span key={item.type.name} className={` badge badge-outline  capitalize bg-${item.type.name}`}>
          {item.type.name}
        </span>
      ))}
    </ul>
  )
}

