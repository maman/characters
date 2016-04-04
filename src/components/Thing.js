import React, { PropTypes } from 'react'
import classnames from 'classnames'

import styles from './Thing.css'

const Thing = ({ data }) => {
  function thingClass () {
    let classes = {}
    classes[data.section] = true
    classes[styles.thingy] = true
    return classes
  }
  return (
    <div className={classnames(thingClass())}>
      <span className={styles.sectionTitle}>{data.section}</span>
      {(() => {
        if (data.data) {
          return (<span className={styles.mainText}>{data.data.name || data.data.title}</span>)
        }
      })()}
    </div>
  ) }

Thing.propTypes = {
  data: PropTypes.object.isRequired
}

export default Thing
