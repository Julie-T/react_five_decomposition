/**
 * Функция для создания общего блока с поиском и темами вместе с главным изображением
 * @param {string} props.children - Блок с поиском и темами вместе с главным изображением
 * @returns {object} Блок с поиском и темами вместе с главным изображением
 */

import React from 'react'
import PropTypes from 'prop-types'

const MainBlockLabel = (props) => {
  return (
    <div className='main-block-label'>{props.children}</div>
  )
}

MainBlockLabel.propTypes = {}

export default MainBlockLabel
