import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = 
  {
    pokemonCollection: [],
    searchTerm: '',
    pokemonFliped: [],

  }
  componentDidMount()
  {
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(data=>{this.setState({pokemonCollection: data})})
  }

  flipCard(card)
  {
    this.setState({pokemonFliped: [...this.pokemonFliped,card.id]})
  }

  isCardFliped()
  {
    this.state.pokemonFliped.findIndex()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection {...this.state}/>
      </Container>
    )
  }
}

export default PokemonPage
