/**
 * Функция для создания элемента списка эфира
 * @param {string} props.imgSrc - Ссылка на изображение
 * @param {string} props.imgAlt - Подпись для изображения
 * @param {string} props.text - Название программы
 * @param {string} props.channel - Название канала
 * @returns {object} Элемент списка эфира
 */

import React from 'react'
import PropTypes from 'prop-types'

const NowInBroadcast = (props) => {
  return (
    <div className='now-in-broadcast'>
        <img src={props.imgSrc} alt={props.imgAlt}/>
        <a href='/#/react' className='broadcast-text'>{props.text}</a>
        <a href='/#/react' className='broadcast-channel'>{props.channel}</a>
    </div>
  )
}

NowInBroadcast.propTypes = {}

export default NowInBroadcast
