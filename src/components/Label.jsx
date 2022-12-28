/**
 * Функция для создания главного изображения общего блока с поиском 
 * @param {string} props.imgSrc - Ссылка на изображение
 * @param {string} props.imgAlt - Подпись для изображения
 * @returns {object} Главное изображение общего блока
 */

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
