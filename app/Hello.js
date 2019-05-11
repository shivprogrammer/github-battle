import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    console.log(this.props)
    return (
      <h2>
        Hello, {this.props.first} {this.props.last}
      </h2>
    )
  }
}

export default Hello
