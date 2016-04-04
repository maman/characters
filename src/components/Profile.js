import React, { PropTypes } from 'react'
import Card from './Card'

const Thing = ({ character }) => (
  <div className='profile'>
    <h1>{character.name}</h1>
    <table>
      {
        let { birth_year, gender, height, mass } = character
      }
      <tr>
        <td></td>
      </tr>
    </table>
  </div>
)

Thing.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Thing
