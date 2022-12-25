import React from 'react'
import PropTypes from 'prop-types'

const Weather = (props) =>{
  return (
    <div className='weather'>
        <a href='/#/react'>Погода</a>
        <div className='weather-content'>
            <img className='tv-img-label' src={props.imgSrc} alt={props.imgAlt}/>
            <a href='/#/react'>{props.t}</a>
            <div>
                <a href='/#/react'>Утром {props.morning}</a>
                <a href='/#/react'>Днем {props.day}</a>
            </div>
        </div>
    </div>
  )
}

Weather.propTypes = {}

export default Weather
