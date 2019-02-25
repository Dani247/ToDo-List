import React from 'react'
// import ToDo from './components/ToDo'
import ToDoHooks from './components/ToDoHooks'

// * estilos del container
const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column wrap'
}

class App extends React.Component {
  render () {
    return (
      <div style={containerStyles}>
        <ToDoHooks />
      </div>
    )
  }
}

export default App
