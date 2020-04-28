import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderCard()
  {
    return(this.props.pokemonCollection.map( pokemon => <PokemonCard key={pokemon.id} pokemon = {pokemon}/> ))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {this.renderCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
