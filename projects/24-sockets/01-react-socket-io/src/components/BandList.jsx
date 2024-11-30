import PropTypes from "prop-types"
import { useState } from "react"
import { useEffect } from "react"
import { useSocketContext } from "../hooks/useSocketContext"

const BandList = () => {
const [bands, setBands] = useState([])
const { socket } = useSocketContext()

  useEffect(() => {
    socket.on("bands", (bands) => {
      setBands(bands)
    })
    return () => {
      socket.off("bands")
    }
  }, [socket])

  const onVote = (id) => {
    socket.emit("increase-votes", id)
  }

  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th className='border-b'>Name</th>
            <th className='border-b'>Genre</th>
            <th className='border-b'>Year</th>
            <th className='border-b'>Votes</th>
            <th className='border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bands.length > 0 ? (
            bands.map((band) => (
              <tr key={band.id}>
                <td className='border-b'>{band.name}</td>
                <td className='border-b'>{band.genre}</td>
                <td className='border-b'>{band.year}</td>
                <td className='border-b'>{band.votes}</td>
                <td className='border-b'>
                  <button type="button" className='btn btn-sm btn-primary' onClick={() => onVote(band.id)}>
                    Vote
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5' className='text-center py-4'>
                No bands available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

BandList.propTypes = {
  bands: PropTypes.array,
  onVote: PropTypes.func,
}

export default BandList
