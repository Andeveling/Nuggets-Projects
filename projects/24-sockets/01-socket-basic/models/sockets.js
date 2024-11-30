import BandList from "./band-list.js"

class Sockets {
  constructor(io) {
    this.io = io
    this.clients = new Map()
    this.bandsList = new BandList()
    this.socketsEvents()
  }

  socketsEvents() {
    this.io.on("connection", (socket) => {
      console.log("A user connected")
      socket.emit("bands", this.bandsList.getBands())
      socket.on("add-band", (band) => {
        this.bandsList.addBand(band)
        this.io.emit("bands", this.bandsList.getBands())
      })
      socket.on("remove-band", (id) => {
        this.bandsList.removeBand(id)
        socket.emit("bands", this.bandsList.getBands())
      })
      socket.on("increase-votes", (id) => {
        this.bandsList.increaseVotes(id)
        this.io.emit("bands", this.bandsList.getBands())
      })
    })
  }
}

export default Sockets
