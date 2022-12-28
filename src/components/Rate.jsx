/**
 * Функция для создания элемента списка котировок блока новостей
 * @param {string} props.currency - Котировка
 * @param {string} props.index - Индекс котировки
 * @param {string} props.increment - Изменение котировки
 * @returns {object} Элемент списка котировок блока новостей
 */

import React from 'react'
import PropTypes from 'prop-types'

const Rate = (props) => {
  return (
    <a href='/#/react'>{`${props.currency} ${props.index} ${props.increment} `}</a>
  )
}

Rate.propTypes = {}

export default Rate
