import Band from "./band.js"

class BandList {
  bands = []
  constructor() {
    this.bands.push(new Band("The Beatles", "Rock", 1960))
    this.bands.push(new Band("Led Zeppelin", "Rock", 1969))
    this.bands.push(new Band("Pink Floyd", "Rock", 1973))
    this.bands.push(new Band("The Rolling Stones", "Rock", 1964))
  }

  addBand(band) {
    const newBand = new Band(band.name, band.genre, band.year)
    this.bands.push(newBand)
    return this.bands
  }

  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id)
    return this.bands
  }

  getBands() {
    return this.bands
  }

  increaseVotes(id) {
    const band = this.bands.find((band) => band.id === id)
    band.votes++

    return this.bands
  }
}

export default BandList
