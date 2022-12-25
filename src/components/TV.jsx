import React from 'react'
import PropTypes from 'prop-types'

const TV = (props) => {
  return (
    <div className='tv'>
      <div className='tv-img'>
        <a href='/#/react'>{props.text}</a>
        <img className='tv-img-label' src={props.imgSrc} alt={props.imgAlt}/>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

TV.propTypes = {}

export default TV
