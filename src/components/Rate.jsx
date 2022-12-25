import React from 'react'
import PropTypes from 'prop-types'

const Rate = (props) => {
  return (
    <a href='/#/react'>{`${props.currency} ${props.index} ${props.increment} `}</a>
  )
}

Rate.propTypes = {}

export default Rate
