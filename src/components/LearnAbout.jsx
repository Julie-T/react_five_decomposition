import React from 'react'
import PropTypes from 'prop-types'

const LearnAbout = (props) => {
  return (
    <div className='learn-about'>
        <img className='tv-img-label' src={props.imgSrc} alt={props.imgAlt}/>
        <a href='/#/react'>{props.title}</a>
        <a href='/#/react'>{props.text}</a>
    </div>
  )
}

LearnAbout.propTypes = {}

export default LearnAbout
