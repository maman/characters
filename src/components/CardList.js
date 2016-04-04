import React, { PropTypes } from 'react'
import Infinite from 'react-infinite'
import Card from './Card'

const CardList = ({characters, loader, hooks}) => (
  <Infinite elementHeight={112}
    preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
    preloadAdditionalHeight={Infinite.containerHeightScaleFactor(2)}
    onInfiniteLoad={loader}
    infiniteLoadBeginEdgeOffset={112}
    useWindowAsScrollContainer>
    {characters.map((character, idx) => {
      return (
        <Card
          key={idx}
          character={character}
          onClick={() => {
            hooks(`/character/${character.id}`)
          }}/>
      ) }
    )}
  </Infinite>
)

CardList.propTypes = {
  characters: PropTypes.array.isRequired,
  loader: PropTypes.func.isRequired,
  hooks: PropTypes.func.isRequired
}

export default CardList
