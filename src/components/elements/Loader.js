import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader-container">
                <svg width="40" height="40">
                        <circle className="outer" cx="20" cy="20" r="15"/>
                </svg>
            </div>
        );
    }
}

export default Loader;