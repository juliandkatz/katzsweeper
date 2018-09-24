import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './App.css'

class Square extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='button-container'>
        <Button floated='left' className='unpressed-button'></Button>
      </div>
    )
  }
}

export default Square
