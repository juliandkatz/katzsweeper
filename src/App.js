import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { cloneDeep } from 'lodash'

import Square from './Square.js'

import './App.css'

// SOME CONFIG
const TOTAL_MINES = 10

class App extends Component {
  constructor (props) {
    super(props)

    this.getMineMatrix = this.getMineMatrix.bind(this)
    this.renderMatrix = this.renderMatrix.bind(this)
    this.squarePressHandler = this.squarePressHandler.bind(this)
    this.populateMatrix = this.populateMatrix.bind(this)

    const matrix = this.populateMatrix(this.getMineMatrix(), 10, 10)

    this.state = {
      totalMines: TOTAL_MINES,
      mineMatrix: matrix
    }
  }

  getMineMatrix (size=10) {
    const matrix = []

    for (let y = 0; y < size; y++) {
      matrix[y] = []

      for (let x = 0; x < size; x++) {
        matrix[y][x] = {
          x: x,
          y: y,
          isMine: false,
          minesAdjacent: 0,
          isRevealed: true,
          squarePressHandler: this.squarePressHandler
        }
      }
    }

    return matrix
  }

  renderMatrix (matrix) {
    return matrix.map(row => {
      const renderedRow = row.map(spot => {
        return <Square {...spot} />
      })
      return <div>{renderedRow}</div>
    })
  }

  squarePressHandler (x, y) {
    this.setState(state => {
      const newState = cloneDeep(state)
      newState.mineMatrix[y][x].isRevealed = true
      return newState
    })
  }

  populateMatrix (matrix, size, numberOfMines) {
    let newMatrix = cloneDeep(matrix)
    let remainingMines = numberOfMines

    while (remainingMines > 0) {
      const randomX = Math.floor((Math.random() * size) + 1) - 1
      const randomY = Math.floor((Math.random() * size) + 1) - 1

      if (!newMatrix[randomY][randomX].isMine) {
        newMatrix[randomY][randomX].isMine = true
        remainingMines--
        newMatrix = this.addToNearbyMines(newMatrix, randomX, randomY)
      }
    }

    return newMatrix
  }

  addToNearbyMines (origMatrix, mineX, mineY) {
    const newMatrix = cloneDeep(origMatrix)
    const coordinatePairs = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]]

    coordinatePairs.forEach(pair => {
      const [adjustX, adjustY] = pair
      const nearbyX = mineX + adjustX
      const nearbyY = mineY + adjustY

      if (!newMatrix[nearbyY] || !newMatrix[nearbyY][nearbyX]) { return }
      newMatrix[nearbyY][nearbyX].minesAdjacent++
    })

    return newMatrix
  }

  render () {
    return (
      <Container className="main-container">
        <Grid textAlign='center' verticalAlign='middle' className="outer-box">
          <Grid.Column>
            {this.renderMatrix(this.state.mineMatrix)}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App
