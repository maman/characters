import React, { PropTypes } from 'react'

const Thing = ({ data }) => (
  <div className={data.section}>
    <span>{data.section}</span>
    {(() => {
      if (data.data) {
        return (<span>{data.data.name || data.data.title}</span>)
      }
    })()}
  </div>
)

Thing.propTypes = {
  data: PropTypes.object.isRequired
}

export default Thing
