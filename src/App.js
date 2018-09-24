import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Square from './Square.js'

import './App.css'

// SOME CONFIG
const TOTAL_MINES = 10

class App extends Component {
  constructor (props) {
    super(props)

    this.getBombMatrix = this.getBombMatrix.bind(this)
    this.renderMatrix = this.renderMatrix.bind(this)
    this.squarePressHandler = this.squarePressHandler.bind(this)

    this.state = {
      totalMines: TOTAL_MINES,
      bombMatrix: this.getBombMatrix()
    }
  }

  getBombMatrix (size=10) {
    const matrix = []

    for (let y = 0; y < size; y++) {
      matrix[y] = []

      for (let x = 0; x < size; x++) {
        matrix[y][x] = {
          x: x,
          y: y,
          isBomb: false,
          bombsAdjacent: 0,
          displayText: '',
          isRevealed: false,
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
    console.log('squarePressHandler ', x, y)
    this.setState(state => {
      const newState = Object.assign({}, state)
      newState.bombMatrix[y][x].isRevealed = true
      return newState
    })
  }

  render () {
    return (
      <Container className="main-container">
        <Grid textAlign='center' verticalAlign='middle' className="outer-box">
          <Grid.Column>
            {this.renderMatrix(this.state.bombMatrix)}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App
