import React, { PropTypes } from 'react'
import Thing from './Thing'

import styles from './Profile.css'

const Profile = ({ character, additional }) => (
  <div className={styles.main}>
    <h1 className={styles.resetH1}>{character.name}</h1>
    <div className={styles.thingHolder}>
      {additional.map((data, idx) => {
        return (<Thing key={idx} data={data} />)
      })}
    </div>
  </div>
)

Profile.propTypes = {
  character: PropTypes.object.isRequired,
  additional: PropTypes.array.isRequired
}

export default Profile
