import React from 'react'
import PropTypes from 'prop-types'

const NowInTV = (props) => {
  return (
    <div>
        <span>{props.time}</span>
        <span>{props.text}</span>
        <span>{props.channel}</span>
    </div>
  )
}

NowInTV.propTypes = {}

export default NowInTV
