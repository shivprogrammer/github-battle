import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

class App extends React.Component {
  render() {
    return (
      <Hello
        first='Shivvy'
        last='Smalls'
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
