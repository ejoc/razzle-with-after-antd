import React, { Component } from 'react'
import { Button } from 'antd' // doesn't work
// import Button from 'antd/lib/button' // work

class Home extends Component {
  render() {
    return (
      <div>
        <Button>Button antd</Button>
      </div>
    )
  }
}

export default Home