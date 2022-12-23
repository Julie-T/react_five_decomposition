import React from 'react'
import PropTypes from 'prop-types'

const Interests =  (props) => {
  return (
    <div>{props.text} {props.children}</div>
  )
}

Interests.propTypes = {}

export default Interests
