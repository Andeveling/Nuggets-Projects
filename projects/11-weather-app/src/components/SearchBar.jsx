import React, { useState } from "react"
import styles from "./SearchBar.module.css"

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("")

  const onSearchValueChange = (event) => {
    setCity(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(city)
    setCity("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input_container}
        type='text'
        placeholder='City...'
        onChange={onSearchValueChange}
        value={city}
      />

      <input className={styles.input_button} type='submit' value='+' />
    </form>
  )
}

export default SearchBar
