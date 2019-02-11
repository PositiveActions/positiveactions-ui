import React, { Component } from 'react';
import HeaderAlt from './HeaderAlt';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <HeaderAlt></HeaderAlt>
                <div className="contact-content">
                    <div className="contact-title">CONTACT US</div>
                    <div className="contact-email"><a href = "mailto: info@positiveactions.com">info@positiveactions.com</a></div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;