import React from 'react'
import PropTypes from 'prop-types'

const TopBlock = (props) => {
  return (
    <div className='top-block'>{props.children}</div>
  )
}

TopBlock.propTypes = {}

export default TopBlock
