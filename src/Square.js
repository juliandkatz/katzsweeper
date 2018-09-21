import React, { Component } from 'react'

import './App.css'

class Square extends Component {
  render() {
    return (
      <div>{this.props.content}</div>
    )
  }
}

export default Square
