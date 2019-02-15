import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Link to="/"><div className="footer-logo">POSITIVE ACTIONS</div></Link>
                <Link to="/contact"><div className="footer-contact">contact us</div></Link>
            </div>
        );
    }
}

export default Footer;