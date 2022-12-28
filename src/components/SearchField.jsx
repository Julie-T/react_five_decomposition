/**
 * Функция для добавления названия кнопки поиска
 * @param {string} props.nameOfButton - Название кнопки поиска
 * @returns {object} Название кнопки поиска
 */

import React from 'react'
import PropTypes from 'prop-types'

const SearchField = (props) => {
  return (
    <div>
      <input/>
      <button>{props.nameOfButton}</button>
    </div>
  )
}

SearchField.propTypes = {}

export default SearchField
