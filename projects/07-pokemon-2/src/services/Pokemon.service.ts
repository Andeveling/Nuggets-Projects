const baseUrl = "https://pokeapi.co/api/v2"
export const getAllPokemons = async ({ limit, offset }: { limit: number; offset: number }) => {
  try {
    const response = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json()

    const promises = data.results.map(async (pokemon: any) => {
      const response = await fetch(`${pokemon.url}`)
      const data = await response.json()
      return data
    })

    const results = await Promise.all(promises)
    return results
  } catch (error) {
    return console.error(error)
  }
}
