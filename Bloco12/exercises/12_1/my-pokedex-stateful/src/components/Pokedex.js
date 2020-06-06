import React from 'react';
import Pokemon from './Pokemon';
import ButtonsPokedex from './ButtonsPokedex';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pokemonIndex: 0, filteredType: 'all'};
  }

  filterPokemons(filteredType) {
    this.setState({filteredType, pokemonIndex: 0});
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  previousPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: ((state.pokemonIndex -1) % numberOfPokemons),
    }));
  }

  fetchFilteredPokemons() {
    const {pokemons} = this.props;
    const {filteredType} = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const {pokemons} = this.props;

    return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];
    
    return (
      <div className="pokedex">
          <div className="top-container">
            <Pokemon pokemon={pokemon} />
            <div className="pokedex-buttons-panel">
              <ButtonsPokedex
                onClick={() => this.filterPokemons('all')}
                className="filter-button">
                All
            </ButtonsPokedex>
            {pokemonTypes.map(type => (
                <ButtonsPokedex
                key={type}
                onClick={() => this.filterPokemons(type)}
                className="filter-button">
                {type}
                </ButtonsPokedex>
            ))}
        </div>
        </div>
        <div className="bottom-container">
        <ButtonsPokedex
          className="pokedex-button"
          onClick={() => this.previousPokemon(filteredPokemons.length)}
          disabled={this.state.pokemonIndex === 0}>
          Prev
        </ButtonsPokedex>
        <ButtonsPokedex
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={this.state.pokemonIndex === filteredPokemons.length - 1}>
          Next
        </ButtonsPokedex>
        </div>
      </div>
    );
}
}
  
export default Pokedex;
