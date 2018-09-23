import React, { Component } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react'

import './App.css'

// SOME CONFIG
const TOTAL_MINES = 10

class App extends Component {
  constructor (props) {
    super(props)

    this.getBombMatrix = this.getBombMatrix.bind(this)
    this.renderBombMatrix = this.renderBombMatrix.bind(this)

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
        matrix[y][x] = (
          <div className='button-container'>
            <Button floated='left' className='unpressed-button'></Button>
          </div>
        )
      }
    }

    return matrix
  }

  renderBombMatrix (matrix) {
    return matrix.map(row => {
      return <div>{row}</div>
    })
  }

  render () {
    return (
      <Container className="main-container">
        <Grid textAlign='center' verticalAlign='middle' className="outer-box">
          <Grid.Column>
            {this.renderBombMatrix(this.state.bombMatrix)}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App
