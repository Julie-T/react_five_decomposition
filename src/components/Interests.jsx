/**
 * Функция для создания блока посещаемых страниц
 * @param {string} props.text - Заголовок блока
 * @param {object} props.children - Список посещаемых страниц
 * @returns {object} Блок посещаемых страниц
 */

import React from 'react'
import PropTypes from 'prop-types'

const Interests =  (props) => {
  return (
    <div>
      <div>{props.text}</div>
      <a href='/#/react' className='interests'>{props.children}</a>
    </div>
    
  )
}

Interests.propTypes = {}

export default Interests
