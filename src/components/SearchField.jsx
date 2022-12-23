import React from 'react'
import PropTypes from 'prop-types'

const SearchField = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.imgAlt}/>
      <input/>
      <button>Найти</button>
    </div>
  )
}

SearchField.propTypes = {}

export default SearchField
