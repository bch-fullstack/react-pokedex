import React, { Component } from 'react';

class List extends Component {
    render() {
        const list = this.props.data.results.map((pokemon, i) =>
            <li key={i}>{pokemon.name}</li>
        );
    
        return (
            <ul>{list}</ul>
        )
    }
}

export default List;