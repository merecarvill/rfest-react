import React from 'react'

class ES6ClassComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      name: this.props.name
    }
  }

  handleClick() {
    const toggleName = (name) => name === "ben" ? "abe" : "ben"

    this.setState((prevState) => {
      return {
        name: toggleName(this.state.name)
      }
    })
  }

  render() {
    return (
      <div>
        <div>ES6 class Example</div>

        <div>{this.state.name}</div>

        <button onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ES6ClassComponent
