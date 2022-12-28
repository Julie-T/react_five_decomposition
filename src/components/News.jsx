/**
 * Функция для создания элемента списка новостей
 * @param {string} props.imgSrc - Ссылка на изображение
 * @param {string} props.imgAlt - Подпись для изображения
 * @param {string} props.text - Описание
 * @returns {object} Элемент списка новостей
 */

import React from 'react'
import PropTypes from 'prop-types'

const News = (props) => {
  return (
    <div className='news'>
      <img src={props.imgSrc} alt={props.imgAlt}/>
      <a href='/#/react' className='news-text'>{props.text}</a>
    </div>
  )
}

News.propTypes = {}

export default News
