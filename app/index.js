import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function isAuthed() {
  return true
}

function isNew() {
  return true
}

class App extends React.Component {
  render() {
    const authed = isAuthed()
    const newUser = isNew()

    if (newUser === true) {
      return <h1>Welcome for your first time!</h1>
    }
    else if (authed === true) {
      return <h1>Welcome back!</h1>
    }
    else {
      return <h1>Login to see your dashboard</h1>
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
