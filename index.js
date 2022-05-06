const { Input } = require('enquirer')
const Board = require('./board')

const askRow = new Input({
  name: 'row',
  message: 'Ingrese la cantidad de filas: '
})

const askColumn = new Input({
  name: 'column',
  message: 'Ingrese la cantidad de columnas: '
})

const main = async () => {
  const row = await askRow.run()
  const column = await askColumn.run()
  const board = new Board(+row, +column)
  console.log(board.show())
  // console.log()
  setInterval(() => {
    console.clear()
    console.log(board.nextStep())
  }, 1000)
}

main()
