/**
 * Функция для создания примера запроса блока поиска
 * @param {string} props.text - Пример запроса
 * @returns {object} Пример запроса
 */

import React from 'react'
import PropTypes from 'prop-types'

const SearchCaption = (props) => {
  return (
    <a href='/#/react'>Найдется всё. Например, {props.text}</a>
  )
}

SearchCaption.propTypes = {}

export default SearchCaption
