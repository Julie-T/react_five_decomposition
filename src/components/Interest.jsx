import React from 'react'
import PropTypes from 'prop-types'

const Interest = (props) => {
  return (
    <div>
        <a href='/#/react'>{props.topic}</a>
        <a href='/#/react'>{props.text}</a>
    </div>
  )
}

Interest.propTypes = {}

export default Interest
