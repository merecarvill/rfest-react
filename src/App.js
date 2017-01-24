import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// import CreateClassComponent from "./no-props/CreateClassComponent.jsx"
// import ES6ClassComponent from "./no-props/ES6ClassComponent.jsx"
// import FunctionalComponent from "./no-props/FunctionalComponent.jsx"
// import ES6ClassComponent from "./with-props/ES6ClassComponent.jsx"
// import FunctionalComponent from "./with-props/FunctionalComponent.jsx"
// import SimpleExample from "./with-state/SimpleExample.jsx"
// import ConditionalExample from "./with-state/ConditionalExample.jsx"
// import FormExample from "./with-state/FormExample.jsx"
// import TableExample from "./with-state/TableExample.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to React</h2>

        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    )
  }
}

export default App
