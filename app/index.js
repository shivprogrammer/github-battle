import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function isLoading() {
  return True
}

class App extends React.Component {
  render() {
    if (isLoading() === true) {
      return null
    }

    const name = 'Shiv'
    return (
      <div>
        <h1>Hello, {name}</h1>
        <p>Today is {new Date().toLocaleString()}</p>
        <p>What is 2 + 2? {2 + 2}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
