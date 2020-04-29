import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = () =>
  {
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(res=>res.json())
    .then(data=>{
      this.setState({name: name, hp: hp, frontUrl: frontUrl, backUrl: backUrl})
    }
    )

  }

  handleChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange = {this.handleChange} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange = {this.handleChange}placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange = {this.handleChange} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange = {this.handleChange} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

/*
Chikorita
45
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/152.png
*/