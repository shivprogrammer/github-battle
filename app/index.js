import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component {
  render() {
    const name = 'Shiv'

    return (
      <h2>
        Hello, World!
      </h2>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
