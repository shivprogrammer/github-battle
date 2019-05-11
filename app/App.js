import React from 'react'
import Hello from './Hello'

class App extends React.Component {
  render() {
    return <Hello name='Shiv' />
  }
}

// export default App

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
