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

    return (
      <div>
        {authed === true && <h3>You are authed!</h3>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
