/**
 * Функция для создания позвательного блока
 * @param {string} props.imgSrc - Ссылка на изображение
 * @param {string} props.imgAlt - Подпись для изображения
 * @param {string} props.title - Название темы
 * @param {string} props.text - Описание
 * @returns {object} Позвательный блок
 */

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
