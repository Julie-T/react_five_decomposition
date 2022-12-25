import React from 'react'
import PropTypes from 'prop-types'

const Label = (props) => {
  return (
    <div className='label'>
      <img src={props.imgSrc} alt={props.imgAlt}/>
    </div>
  )
}

Label.propTypes = {}

export default Label
