class Cell {
  constructor (random = true) {
    if (random) {
      this.randomStatus()
    } else {
      this.status = 0
    }
    this.neighbors = 0
  }

  randomStatus () {
    this.status = Math.random() > 0.6 ? 1 : 0
  }

  getStatus () {
    return this.status
  }

  getNeighbors () {
    return this.neighbors
  }

  setStatus (newStatus) {
    this.status = newStatus
  }

  setNeighbors (newNeighbors) {
    this.neighbors = newNeighbors
  }
}

module.exports = Cell
