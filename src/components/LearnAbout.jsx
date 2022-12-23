import React from 'react'
import PropTypes from 'prop-types'

const LearnAbout = (props) => {
  return (
    <div>
        <div>{props.title}</div>
        <div>{props.text}</div>
    </div>
  )
}

LearnAbout.propTypes = {}

export default LearnAbout
