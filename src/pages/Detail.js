import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get, getFromCache, getLoaded, getFailed, getAdditional, clearDetail } from 'data/actions'
import Profile from 'components/Profile'

class Detail extends Component {
  findById () {
    let { id } = this.props.params
    return this.props.characters.filter((character) => {
      return character.id === id
    })
  }

  componentWillMount () {
    let character = this.findById()
    let getter
    if (character.length) {
      getter = () => { return getFromCache(character[0]) }
    } else {
      getter = () => { return get(this.props.params.id) }
    }
    this.props.dispatch(getter())
    .then(({data}) => {
      this.props.dispatch(getLoaded(data))
      let idx = 0
      Object.keys(data).forEach((additional) => {
        if (['films', 'species', 'starships', 'vehicles'].includes(additional)) {
          data[additional].forEach((url) => {
            idx += 1
            this.props.dispatch(getAdditional(url, additional, idx))
          })
        }
      })
    })
    .catch((error) => {
      this.props.dispatch(getFailed(error))
    })
  }

  componentWillUnmount () {
    this.props.dispatch(clearDetail())
  }

  render () {
    return (
      <Profile character={this.props.detail.data}
        additional={this.props.detail.additional}/>
    )
  }
}

function mapStateToProps ({ characters, detail }) {
  return { characters, detail }
}

export default connect(mapStateToProps)(Detail)
