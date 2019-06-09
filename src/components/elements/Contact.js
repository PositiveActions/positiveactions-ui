import React, { Component } from 'react';
import HeaderAlt from './HeaderAlt';
import Footer from './Footer';

import { inject, observer } from "mobx-react";

@inject('UserStore')
@observer
class Contact extends Component {
    render() {

        const { UserStore } = this.props;
        const { userId } = UserStore;

        console.log(userId)

        return (
            <div className="contact-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn} userId={userId} userObject={this.props.UserStore.userObject}></HeaderAlt>
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