/**
 * Функция для создания нижнего блока с темами
 * @param {string} props.children - Блок с темами
 * @returns {object} Блок с темами
 */

import React from 'react'
import PropTypes from 'prop-types'

const Themes = (props) => {
  return (
    <div className='themes'>{props.children}</div>
  )
}

Themes.propTypes = {}

export default Themes
