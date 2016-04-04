import React, { PropTypes } from 'react'
import styles from './Card.css'

const Card = ({ character, onClick }) => (
  <div className={styles.card} onClick={onClick}>
    <div className={styles.cardWrapper}>
      <h2 style={{marginTop: 0}}>{character.name}</h2>
      <span className='birthYear'>Date of Birth: {character.birth_year}</span>
    </div>
  </div>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired
}

export default Card
