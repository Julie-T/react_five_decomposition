import React from 'react'
import PropTypes from 'prop-types'

const Broadcast = (props) => {
  return (
    <div>
        <div>{props.text}</div>
        <div>{props.children}</div>
    </div>
  )
}

Broadcast.propTypes = {}

export default Broadcast
