import React from 'react'

const FunctionalComponent = (props) => {
  return (
    <div>
      <div>Functional Example</div>

      <div>{props.name}</div>
    </div>
  )
}

FunctionalComponent.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default FunctionalComponent
