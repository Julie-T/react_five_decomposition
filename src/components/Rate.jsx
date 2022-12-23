import React from 'react'
import PropTypes from 'prop-types'

const Rate = (props) => {
  return (
    <span>{`${props.currency} ${props.index} ${props.increment} `}</span>
  )
}

Rate.propTypes = {}

export default Rate
