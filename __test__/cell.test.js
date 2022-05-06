const Cell = require('../cell.js')

test('Probando metodo getStatus', () => {
  const cell = new Cell()
  expect(cell.getStatus() === 0 || cell.getStatus() === 1).toBeTruthy()
})

test('Probando metodo getNeighbors', () => {
  const cell = new Cell()
  expect(cell.getNeighbors()).toBe(0)
})

test('Probando metodo setStatus', () => {
  const cell = new Cell()
  cell.setStatus(1)
  expect(cell.getStatus()).toBe(1)
})

test('Probando método setNeighbors', () => {
  const cell = new Cell()
  cell.setNeighbors(1)
  expect(cell.getNeighbors()).toBe(1)
  expect(cell.getNeighbors()).toBeGreaterThanOrEqual(0)
  expect(cell.getNeighbors()).toBeLessThanOrEqual(8)
})
