/**
 * Функция для создания элемента списка тем блока поиска
 * @param {string} props.text - Название темы
 * @returns {object} Элемент списка тем блока поиска
 */

import React from 'react'
import PropTypes from 'prop-types'

const Subject = (props) => {
  return (
    <a href='/#/react'>{props.text}</a>
  )
}

Subject.propTypes = {}

export default Subject
