import React from 'react'
import PropTypes from 'prop-types'

const Media = (props) => {
  return (
    <div className='media'>
        <div>
        <a href='/#/react'>{props.mainTitle}</a>
        <a href='/#/react'>{props.title}</a>
        <a href='/#/react'>{props.recomends}</a>
        <span>{props.date}</span>
        </div>
        <div>{props.children}</div>
    </div>
  )
}

Media.propTypes = {}

export default Media
