import React, { Component } from 'react';
import Loader from './Loader';
import List from './List';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null
        };
    }
    
    render() {
        return (
            <div>
				<div>Here is a list of pokemons that I have collected</div>
                { this.state.loading ? <Loader /> : <List data={this.state.data} /> }
            </div>
        );
    }

    componentDidMount() {
        const scope = this;

        setTimeout(() => {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
            fetch(url)
                .then(data => data.json())
                .then(json => {
                    scope.setState({
                        loading: false,
                        data: json
                    })
                });
        }, 3000);
    }
}

export default Pokedex;