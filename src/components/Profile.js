import React, { PropTypes } from 'react'
import Thing from './Thing'

const Profile = ({ character, additional }) => (
  <div className='profile'>
    <h1>{character.name}</h1>
    {additional.map((data, idx) => {
      return (<Thing key={idx} data={data} />)
    })}
  </div>
)

Profile.propTypes = {
  character: PropTypes.object.isRequired,
  additional: PropTypes.array.isRequired
}

export default Profile
