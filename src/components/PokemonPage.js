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
  }
  componentDidMount()
  {
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(data=>{
      this.setState( {pokemonCollection: data})
    }
      
    )
  }
  
  onChangeSearcherHandler = (event)=>{
    this.setState({searchTerm: event.target.value})
  }


  renderPokemon()
  {
    // let retVal = <PokemonCollection {...this.state}/>
    let retVal = this.state.pokemonCollection
    if(this.state.searchTerm!=='')
    {
      // debugger
      retVal = retVal.filter((pokemon)=>{return pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())})
    }
    return retVal
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        {/* <Search onChange={() => console.log('🤔')} /> */}
        <Search onChange={this.onChangeSearcherHandler} />
        
        <br />
        <PokemonCollection pokemonCollection = {this.renderPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
