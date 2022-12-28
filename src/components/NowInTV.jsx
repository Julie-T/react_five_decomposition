/**
 * Функция для создания элемента списка телепрограммы
 * @param {string} props.time - Время программы
 * @param {string} props.text - Название программы
 * @param {string} props.channel - Название канала
 * @returns {object} Элемент списка телепрограммы
 */

import React from 'react'
import PropTypes from 'prop-types'

const NowInTV = (props) => {
  return (
    <div>
        <span href='/#/react'>{props.time}</span>
        <a href='/#/react'>{props.text}</a>
        <a href='/#/react'>{props.channel}</a>
    </div>
  )
}

NowInTV.propTypes = {}

export default NowInTV
