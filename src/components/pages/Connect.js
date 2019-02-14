import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';

class Connect extends Component {
    render() {
        return (
            <div className="connect-container">
                <HeaderAlt></HeaderAlt>
                <div className="connect-content">
                    This is the connection.
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Connect;