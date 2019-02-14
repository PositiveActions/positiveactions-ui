import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';

class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe-container">
                <HeaderAlt></HeaderAlt>
                    <div className="subscribe-content">
                        This si the subscription.
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Subscribe;