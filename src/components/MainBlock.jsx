import React from 'react'
import PropTypes from 'prop-types'

const MainBlock = (props) => {
  return (
    <div className='main-block'>{props.children}</div>
  )
}

MainBlock.propTypes = {}

export default MainBlock
