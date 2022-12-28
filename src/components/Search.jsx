/**
 * Функция для создания блока поиска
 * @param {object} props.children - Блок поиска
 * @returns {object} Блок поиска
 */

import React from 'react'
import PropTypes from 'prop-types'

const Search = (props) => {
  return (
    <div className='search'>{props.children}</div>
  )
}

Search.propTypes = {}

export default Search
