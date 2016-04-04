import React, { PropTypes } from 'react'

const Card = ({ character, onClick }) => (
  <div className='card' onClick={onClick} style={{height: '80px'}}>
    <h2 style={{marginTop: 0}}>{character.name}</h2>
    <span className='birthYear'>{character.birth_year}</span>
  </div>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired
}

export default Card
