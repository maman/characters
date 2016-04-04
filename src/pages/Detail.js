import React, { Component } from 'react'
import { connect } from 'react-redux'

class Detail extends Component {
  constructor (props) {
    super(props)
  }
}

function mapStateToProps ({ characters }) {
  return { character: characters[this.props.params.id] }
}

export default connect(mapStateToProps)(Main)
