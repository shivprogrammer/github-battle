import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    console.log(this.props)
    return (
      <h2>
        Hello, Shiv
      </h2>
    )
  }
}

// export default Hello

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
)
