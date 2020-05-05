import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPokedex: false
		}

		// you need to perform this upon introduction of any custom methods
		this.checkPokedex = this.checkPokedex.bind(this);
	}

	checkPokedex() {
		this.setState({
			showPokedex: true
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Pokedex</h1>
				<button id="checkPokedex" onClick={this.checkPokedex}>Get the pokemons</button>
				{ this.state.showPokedex ? <Pokedex></Pokedex> : '' }
			</div>
		);
	}
}

export default App;
