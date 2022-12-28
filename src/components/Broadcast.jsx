/**
 * Функция для создания блока эфира
 * @param {string} props.text - Заголовок блока
 * @param {object} props.children - Список программ в эфире
 * @returns {object} Блок эфира
 */

import React from 'react'
import PropTypes from 'prop-types'

const Broadcast = (props) => {
  return (
    <div className='broadcast'>
        <a href='/#/react'>{props.text}</a>
        <div>{props.children}</div>
    </div>
  )
}

Broadcast.propTypes = {}

export default Broadcast
