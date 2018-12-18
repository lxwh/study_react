import React, { Component } from 'react'
import Child from './Child.js'
export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>React 生命周期</h1>
          <div>
            <button onClick={this.handleIncrement}>增加</button>
            <span>---</span>
            <button onClick={this.handleDecrement}>减少</button>
          </div>
          <div>count: {this.state.count}</div>
        </div>
        <Child name="jack" />
      </div>
    )
  }
}
