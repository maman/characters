import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Infinite from 'react-infinite'
import Card from './Card'

const CardList = ({characters, loader}) => (
  <Infinite elementHeight={80}
    preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
    preloadAdditionalHeight={Infinite.containerHeightScaleFactor(2)}
    onInfiniteLoad={loader}
    infiniteLoadBeginEdgeOffset={80}
    useWindowAsScrollContainer>
    {characters.map((character, idx) => {
      return <Card key={idx} character={character} onClick={() => browserHistory.push(`/character/${character.id}`)} />
    })}
  </Infinite>
)

CardList.propTypes = {
  characters: PropTypes.array.isRequired,
  loader: PropTypes.func.isRequired
}

export default CardList
