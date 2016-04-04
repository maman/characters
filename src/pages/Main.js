import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { list, savePosition } from 'data/actions'
import CardList from 'components/CardList'

import styles from './Main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.currentPageNumber = 0
    this.openNextPage = this.openNextPage.bind(this)
    this.openHooks = this.openHooks.bind(this)
  }

  componentDidMount () {
    if (this.props.position > 0) {
      window.scrollTo(0, this.props.position)
    }
  }

  openNextPage () {
    // if (!this.props.failed && !this.props.loading) {
    this.currentPageNumber += 1
    this.props.dispatch(list(this.currentPageNumber))
    // }
  }

  openHooks (url) {
    // if (!this.props.failed && !this.props.loading) {
    browserHistory.push(url)
    this.props.dispatch(savePosition(window.scrollY))
    // }
  }

  render () {
    return (
      <div className={this.props.children ? styles.frameBackdrop : styles.frame}>
        <div className={this.props.children ? styles.popup : styles.popupHidden}>
          {this.props.children}
        </div>
        <div className={styles.header}>
          <h1>Starwars!</h1>
        </div>
        <CardList
          className={styles.list}
          characters={this.props.characters}
          loader={() => { this.openNextPage() }}
          hooks={(url) => {
            this.openHooks(url)
          }}/>
      </div>
    )
  }
}

function mapStateToProps ({ characters, loading, failed, position }) {
  return { characters, loading, failed, position }
}

export default connect(mapStateToProps)(Main)
