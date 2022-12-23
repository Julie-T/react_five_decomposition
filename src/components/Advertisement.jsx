import React from 'react'
import PropTypes from 'prop-types'

const Advertisement = (props) => {
  return (
    <div>
        <img src={props.imgSrc} alt={props.imgAlt}/>
    </div>
  )
}

Advertisement.propTypes = {}

export default Advertisement
