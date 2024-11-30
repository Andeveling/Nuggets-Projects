import { v4 } from "uuid"

class Band {
  votes = 0
  constructor(name, genre, year) {
    this.id = v4()
    this.name = name
    this.genre = genre
    this.year = year
    this.votes = 0
  }
}

export default Band
