import React from 'react'
import Menu from './components/Menu/main'
import Quiz from './components/Quiz/main'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <>
        <Menu/>
        <Quiz/>
      </>
    )
  }
}

export default App;