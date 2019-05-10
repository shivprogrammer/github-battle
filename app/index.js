import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component {
  render() {
    const name = 'Shiv'

    return (
      <React.Fragment>
        <h1>Hello, {name}</h1>
        <p>Today is {new Date().toLocaleString()}</p>
        <p>What is 2 * 2? {2 * 2}</p>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
