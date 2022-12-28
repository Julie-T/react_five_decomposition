/**
 * Функция для создания элемента списка блока посещаемых страниц
 * @param {string} props.topic - Название темы
 * @param {string} props.text - Описание
 * @returns {object} Элемент списка блока посещаемых страниц
 */

import React from 'react'
import PropTypes from 'prop-types'

const Interest = (props) => {
  return (
    <div>
        <a href='/#/react'>{props.topic}</a>
        <a href='/#/react'>{props.text}</a>
    </div>
  )
}

Interest.propTypes = {}

export default Interest
