import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import Square from './Square'

import './App.css'

// SOME CONFIG
const TOTAL_MINES = 10

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalMines: TOTAL_MINES
    }
  }

  render() {
    return (
      <Container className="main-container">
        <Container className="outer-box">
          this is a test <Square content="bla" />
        </Container>
      </Container>
    )
  }
}

export default App
