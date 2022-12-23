import React from 'react'
import PropTypes from 'prop-types'

const Weather = (props) =>{
  return (
    <div>
        <span>Погода</span>
        <div>
            <div>{props.t}</div>
            <div>
                <div>Утром {props.morning}</div>
                <div>Днем {props.day}</div>
            </div>
        </div>
    </div>
  )
}

Weather.propTypes = {}

export default Weather
