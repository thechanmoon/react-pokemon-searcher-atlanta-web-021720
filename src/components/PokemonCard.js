import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src = {this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            {/* <div className="header">POKEMON NAME HERE</div> */}
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* POKEMON HP HERE hp */}
              {this.props.pokemon.stats.find(s => s.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
