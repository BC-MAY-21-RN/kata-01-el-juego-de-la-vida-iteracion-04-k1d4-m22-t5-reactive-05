const Cell = require('./cell.js')
const Point = require('./point')

class Board {
  constructor (rows, columns) {
    this.rows = rows
    this.columns = columns
    this.renderedBoard = this.generateBoard(this.rows, this.columns)
  }

  generateBoard (x, y) {
    return Array(x).fill(new Array(y).fill('')).map((fila) =>
      fila.map(() =>
        new Cell()
      ))
  }

  show () {
    return this.renderedBoard.map(row => row.map(cell => cell.getStatus()).join(' ')).join('\n')
  }

  findNeighbors (row, column) {
    let aliveNeighbors = 0

    const points = [
      new Point(-1, -1), new Point(-1, 0), new Point(-1, +1),
      new Point(0, -1), /* CURRENT */ new Point(0, +1),
      new Point(+1, -1), new Point(+1, 0), new Point(+1, +1)
    ]
    // Ciclo para realizar los movimientos
    for (let i = 0; i < points.length; i++) {
      const mox = row + points[i].x
      const moy = column + points[i].y
      if (!(mox < 0 || moy < 0 || mox > (this.rows - 1) || moy > (this.columns - 1))) {
        aliveNeighbors += this.renderedBoard[mox][moy].getStatus()
      }
    }

    this.renderedBoard[row][column].setNeighbors(aliveNeighbors)
  }

  nextStep () {
    const nextBoard = new Array(this.rows).fill(new Array(this.columns).fill('')).map((fila) =>
      fila.map(() =>
        new Cell(false)
      ))
    this.renderedBoard.forEach((row, indexrow) => row.forEach((cell, indexcolumn) => {
      this.findNeighbors(indexrow, indexcolumn)
      const auxNeighbor = cell.getNeighbors()
      if (cell.getStatus() === 1) {
        if (auxNeighbor === 2 || auxNeighbor === 3) {
          nextBoard[indexrow][indexcolumn].setStatus(1)
          // cell.setStatus(1)
        } else {
          nextBoard[indexrow][indexcolumn].setStatus(0)
          // cell.setStatus(0)
        }
      } else {
        if (auxNeighbor === 3) {
          nextBoard[indexrow][indexcolumn].setStatus(1)
          // cell.setStatus(1)
        }
      }
    }))
    this.renderedBoard = nextBoard
    return this.show()
  }
}

module.exports = Board
