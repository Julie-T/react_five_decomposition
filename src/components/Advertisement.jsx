/**
 * Функция для создания рекламного блока
 * @param {string} props.imgSrc - Ссылка на изображение
 * @param {string} props.imgAlt - Подпись для изображения
 * @returns {object} Рекламный блок
 */

import React from 'react'
import PropTypes from 'prop-types'

const Advertisement = (props) => {
  return (
    <div className='adv'>
        <img src={props.imgSrc} alt={props.imgAlt}/>
    </div>
  )
}

Advertisement.propTypes = {}

export default Advertisement
