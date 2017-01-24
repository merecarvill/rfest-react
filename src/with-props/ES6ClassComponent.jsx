import React from 'react'

class ES6ClassComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>ES6 class Example</div>

        <div>{this.props.name}</div>
      </div>
    )
  }
}

ES6ClassComponent.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default ES6ClassComponent
