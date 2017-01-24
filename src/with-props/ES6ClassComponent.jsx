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

export default ES6ClassComponent
