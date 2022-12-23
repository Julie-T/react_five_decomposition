import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Media = (props) => {
  return (
    <div className='media'>
        <div>
        <span>{props.mainTitle}</span>
        <span>{props.title}</span>
        <span>{props.recomends}</span>
        <span>{props.date}</span>
        </div>
        <div>{props.children}</div>
    </div>
  )
}

Media.propTypes = {}

export default Media
