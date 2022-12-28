/**
 * Функция для создания общего блока с поиском и темами
 * @param {string} props.children - Блок с поиском и темами
 * @returns {object} Блок с поиском и темами
 */

import React from 'react'
import PropTypes from 'prop-types'

const MainBlock = (props) => {
  return (
    <div className='main-block'>{props.children}</div>
  )
}

MainBlock.propTypes = {}

export default MainBlock
