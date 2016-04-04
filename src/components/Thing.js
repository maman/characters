import React, { PropTypes } from 'react'

const Thing = ({ name, text }) => (
  <div className={name}>
    <span>{text}</span>
  </div>
)

Thing.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Thing
