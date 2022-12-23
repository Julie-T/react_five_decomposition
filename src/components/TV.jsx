import React from 'react'
import PropTypes from 'prop-types'

const TV = (props) => {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.children}</div>
    </div>
  )
}

TV.propTypes = {}

export default TV
