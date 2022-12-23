import React from 'react'
import PropTypes from 'prop-types'

const NowInBroadcast = (props) => {
  return (
    <div>
        <span>{props.text}</span>
        <span>{props.channel}</span>
    </div>
  )
}

NowInBroadcast.propTypes = {}

export default NowInBroadcast
