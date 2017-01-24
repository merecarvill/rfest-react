import React from "react"

class SimpleExample extends React.Component {
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
        name: toggleName(prevState.name)
      }
    })
  }

  render() {
    return (
      <div>
        <div>Simple Example</div>

        <button onClick={this.handleClick}>
          Click Me
        </button>

        <div>{this.state.name}</div>
      </div>
    )
  }
}

export default SimpleExample
