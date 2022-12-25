import React from 'react'
import PropTypes from 'prop-types'

const Interests =  (props) => {
  return (
    <a href='/#/react' className='interests'>{props.text} {props.children}</a>
  )
}

Interests.propTypes = {}

export default Interests
