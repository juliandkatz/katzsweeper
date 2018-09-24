import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './App.css'

class Square extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('handleClick')
    this.props.squarePressHandler(this.props.x, this.props.y)
  }

  render () {
    const content = this.props.isRevealed
      ? <div className='revealed-square'>{this.props.displayText}</div>
      : <Button floated='left' className='unpressed-button' onClick={this.handleClick}></Button>

    return (
      <div className='button-container'> {content} </div>
    )
  }
}

export default Square
