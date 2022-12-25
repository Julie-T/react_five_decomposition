import React from 'react'
import PropTypes from 'prop-types'

const Maps = (props) => {
  return (
    <div className='maps'>
      <a href='/#/react'>{props.topic}</a>
      <a href='/#/react'>{props.text}</a>
    </div>
  )
}

Maps.propTypes = {}

export default Maps
