import { Header } from "@/components"
import { Pokemons } from "@/components"
import { usePokemons } from "@/context/PokemonContext"

function App() {
  const { totalPokemons } = usePokemons()
  return (
    <>
      <Header pokemons={totalPokemons} />
      <Pokemons />
    </>
  )
}

export default App
