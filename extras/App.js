import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

class App extends React.Component {
  render() {
    return (
      <Hello
        username='shivvysmalls'
        authed={true}
        logout={() => alert('Logged Out!')}
        header={<h1>Hi there!</h1>}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
