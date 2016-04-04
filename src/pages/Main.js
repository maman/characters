import React, { Component } from 'react'
import { connect } from 'react-redux'
import { list } from 'data/actions'
import CardList from 'components/CardList'

class Main extends Component {
  constructor (props) {
    super(props)
    this.currentPageNumber = 1
    this.openNextPage = this.openNextPage.bind(this)
  }

  openNextPage () {
    if (!this.props.failed && !this.props.loading) {
      this.currentPageNumber += 1
      this.props.dispatch(list(this.currentPageNumber))
    }
  }

  render () {
    return (
      <div>
        <h1>Starwars!</h1>
        <CardList
          characters={this.props.characters}
          loader={() => { this.openNextPage() }}/>
      </div>
    )
  }
}

function mapStateToProps ({ characters, loading, failed }) {
  return { characters, loading, failed }
}

export default connect(mapStateToProps)(Main)
