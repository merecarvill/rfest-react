import React from "react"

class ConditionalExample extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      isShowing: true
    }
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isShowing: !prevState.isShowing
      }
    })
  }

  render() {
    const buttonText = this.state.isShowing ? "Hide" : "Show"

    return (
      <div>
        <div>Conditional Example</div>

        <button onClick={this.handleClick}>
          {buttonText}
        </button>

        {this.state.isShowing &&
          <h1>Peek-a-boo!</h1>
        }
      </div>
    )
  }
}

export default ConditionalExample
