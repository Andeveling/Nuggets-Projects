import { usePokemons } from "./context/PokemonContext"

function App() {
  const { pokemons } = usePokemons()
  return (
    <div className='container'>
      <h1 className="text-3xl">Pokemons</h1>
      <ul>
        {pokemons.map((pokemon:any) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
