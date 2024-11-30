import { useState } from "react"
import PropTypes from "prop-types"
import { useSocketContext } from "../hooks/useSocketContext"

const BandForm = () => {
  const { socket } = useSocketContext()

  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("add-band", { name, genre, year })
    setName("")
    setGenre("")
    setYear("")
  }

  return (
    <form className='max-w-lg mx-auto p-6 bg-base-200 rounded-lg shadow-md' onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-4'>Add a Band</h2>
      <div className='form-control mb-4'>
        <label className='label' htmlFor='name'>
          <span className='label-text'>Band Name</span>
        </label>
        <input
          type='text'
          id='name'
          className='input input-bordered w-full'
          placeholder="Enter the band's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='form-control mb-4'>
        <label className='label' htmlFor='genre'>
          <span className='label-text'>Genre</span>
        </label>
        <input
          type='text'
          id='genre'
          className='input input-bordered w-full'
          placeholder="Enter the band's genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div className='form-control mb-4'>
        <label className='label' htmlFor='year'>
          <span className='label-text'>Year</span>
        </label>
        <input
          type='number'
          id='year'
          className='input input-bordered w-full'
          placeholder="Enter the band's founding year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary w-full'>
        Add Band
      </button>
    </form>
  )
}

BandForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default BandForm
