import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';

class NotFound extends Component {
    render() {
        return (
            <div className="not-found-container">
                <HeaderAlt></HeaderAlt>
                <div className="not-found-text">PAGE NOT FOUND</div>
                <Footer></Footer>
            </div>
        );
    }
}

export default NotFound;