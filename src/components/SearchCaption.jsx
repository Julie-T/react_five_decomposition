import React from 'react'
import PropTypes from 'prop-types'

const SearchCaption = (props) => {
  return (
    <div>Найдется всё. Например, {props.text}</div>
  )
}

SearchCaption.propTypes = {}

export default SearchCaption
