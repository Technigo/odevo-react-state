import { useState } from "react"

export const Country = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [capital, setCapital] = useState("")
  // const [error, setError] = useState("")

  // Practice: Add another state for e.g. population and display it in the component as well as fetch it from the API response

  const handleSearch = (event) => {
    event.preventDefault()

    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        //if data.status === 404
        //setError("Country doesn't exist")
        //else if data.length
        //else if data[0]
        setCapital(data[0].capital[0])
      })
  }

  // Practice: Make the API call on initial render as well, with a default country like e.g. "Sweden" or "United Kingdom")

  return (
    <section>
      <h2>Country: {searchTerm}</h2>
      <p>Capital: {capital}</p>
      <form onSubmit={handleSearch}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Type something..."
          id="name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
