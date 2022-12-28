/**
 * Функция для создания блока с погодой
 * @param {string} props.topic - Заголовок блока
 * @param {string} props.imgSrc - Ссылка на изображение
 * @param {string} props.imgAlt - Подпись для изображения
 * @param {string} props.t - Температура сейчас
 * @param {string} props.morning - Температура утром
 * @param {string} props.day - Температура днем
 * @returns {object} Блок погоды
 */

import React from 'react'
import PropTypes from 'prop-types'

const Weather = (props) =>{
  return (
    <div className='weather'>
        <a href='/#/react'>{props.topic}</a>
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
