const Board = require('../board.js')

test('Probando método show', () => {
  const rows = Math.floor(Math.random() * (10 - 1)) + 1
  const cols = Math.floor(Math.random() * (10 - 1)) + 1
  const board = new Board(rows, cols)
  expect(typeof board.show()).toBe('string')
  expect(board.show().match(/(0|1)/g).length).toBe(rows * cols)
})

test('Probando método nextStep', () => {
  const rows = Math.floor(Math.random() * (10 - 1)) + 1
  const cols = Math.floor(Math.random() * (10 - 1)) + 1
  const board = new Board(rows, cols)
  const initial = board.show()
  const next = board.nextStep()
  expect(next).not.toEqual(initial)
  expect(typeof board.nextStep()).toBe('string')
  expect(board.nextStep().match(/(0|1)/g).length).toBe(rows * cols)
})

test('Probando método findNeighbors', () => {
  const rows = Math.floor(Math.random() * (10 - 1)) + 1
  const cols = Math.floor(Math.random() * (10 - 1)) + 1
  const board = new Board(rows, cols)
  expect(board.findNeighbors(0, 0)).toBe(undefined)
})

test('Probando método generateBoard', () => {
  const rows = Math.floor(Math.random() * (10 - 1)) + 1
  const cols = Math.floor(Math.random() * (10 - 1)) + 1
  const board = new Board(rows, cols)
  expect(board.generateBoard(rows, cols)).toBeDefined()
  expect(board.generateBoard(rows, cols)).toBeInstanceOf(Array)
})
