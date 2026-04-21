import { useEffect, useState } from "react"

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
  // Practice: Change this function to return a random number between 1 and 151
}

export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonImage, setPokemonImage] = useState("")
  // Practice: Add another state like pokemonWeight or pokemonHeight and display it in the component as well as fetch it from the API response

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`)
      .then((response) => {
        return response.json()
      })
      .then((pokemon) => {
        console.log(pokemon)
        setPokemonName(pokemon.name)
        setPokemonImage(pokemon.sprites.front_default)
      })
  }

  useEffect(() => {
    //put side effect
    fetchPokemon()
  }, [])

  // fetchPokemon() //This will cause an infinite loop because every time we set state, the component re-renders and calls fetchPokemon again, which sets state again, which causes another re-render, and so on...

  return (
    <section>
      <h2>Pokemon: {pokemonName}</h2>
      {/* <img src={pokemonImage} alt={pokemonName} /> */}
      {/* ☝️ This will cause an error if pokemonImage hasn't been loaded yet */}
      {/* So a better approach would be to conditionally render the image, like this 👇 */}
      {pokemonImage && <img src={pokemonImage} alt={pokemonName} />}
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
    </section>
  )
}
