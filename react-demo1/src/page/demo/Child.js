import React, { Component } from 'react'
export default class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillReceiveProps() {
    console.log('will receive props')
  }

  shouldComponentUpdate() {
    console.log('should component update')
    return true
  }

  componentWillUpdate() {
    console.log('component will update')
  }

  componentDidUpdate() {
    console.log('component did update')
  }
  componentWillUnmount() {
    console.log('component will unmount')
  }

  render() {
    return (
      <div>
        <h2>子组件生命周期</h2>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
