import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { inject, observer } from "mobx-react";

@inject('UserStore')
@observer
class NotFound extends Component {
    render() {

        const { UserStore } = this.props;

        return (
            <div className="not-found-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn} userObject={this.props.UserStore.userObject}></HeaderAlt>
                <div className="not-found-text">PAGE NOT FOUND</div>
                <Footer></Footer>
            </div>
        );
    }
}

export default NotFound;