import React from 'react'
import PropTypes from 'prop-types'

const Interest = (props) => {
  return (
    <div>
        <span>{props.topic}</span>
        <span>{props.text}</span>
    </div>
  )
}

Interest.propTypes = {}

export default Interest
