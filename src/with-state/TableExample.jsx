import React from "react"

class TableExample extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.availableNames = ["abe", "ben", "cat", "dan", "eke", "fei", "gin"]

    this.state = {
      displayedNames: [this.props.name]
    }
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        displayedNames: [...prevState.displayedNames, this.availableNames.pop()]
      }
    })
  }

  render() {
    return (
      <div>
        <div>Table Example</div>

        <button onClick={this.handleClick}>
          Add name to row
        </button>

        <table>
          <tbody>
            <tr>
              <th>Number</th>
              <th>Name</th>
            </tr>
            {
              this.state.displayedNames.map((name, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{name}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableExample
