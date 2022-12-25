import React from 'react'
import PropTypes from 'prop-types'

const Broadcast = (props) => {
  return (
    <div className='broadcast'>
        <a href='/#/react'>{props.text}</a>
        <div>{props.children}</div>
    </div>
  )
}

Broadcast.propTypes = {}

export default Broadcast
