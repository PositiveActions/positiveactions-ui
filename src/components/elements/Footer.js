import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <a href="/"><div className="footer-logo">POSITIVE ACTIONS</div></a>
                <a href="/contact"><div className="footer-contact">contact us</div></a>
            </div>
        );
    }
}

export default Footer;