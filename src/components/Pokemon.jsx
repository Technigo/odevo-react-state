const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

export const Pokemon = () => {
  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber()}`)
      .then((response) => {
        return response.json()
      })
      .then((pokemon) => {
        console.log(pokemon.name)
      })
  }

  return (
    <section>
      <h2>Pokemon: ?</h2>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
    </section>
  )
}
