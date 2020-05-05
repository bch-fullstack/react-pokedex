import '../css/loader.css';
import React from 'react';

class Loader extends React.Component {
    render(){
        return (
            <div className="lds-hourglass"></div>
        );
    }
}

export default Loader;