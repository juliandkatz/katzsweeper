import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './App.css'

class Square extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.getContent = this.getContent.bind(this)
  }

  handleClick () {
    this.props.squarePressHandler(this.props.x, this.props.y)
  }

  getContent () {
    if (this.props.isMine) {
      return 'B'
    } else {
      return this.props.minesAdjacent || ''
    }
  }

  render () {
    const content = this.props.isRevealed
      ? <div className='revealed-square'>{this.getContent()}</div>
      : <Button floated='left' className='unpressed-button' onClick={this.handleClick}></Button>

    return (
      <div className='button-container'>{content}</div>
    )
  }
}

export default Square
