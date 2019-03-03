import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField } from '@material-ui/core';
import { inject, observer } from "mobx-react";

@inject('UserStore')
@observer
class Subscribe extends Component {
    render() {

        const { UserStore } = this.props;

        return (
            <div className="subscribe-container">
                <HeaderAlt userLoggedIn={UserStore.userLoggedIn}></HeaderAlt>
                    <div className="subscribe-content">
                    <div className="signup-text">SIGN UP</div>
                    <form className="subscribe-form" noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Username"
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        />
                        <TextField
                            id="standard-name"
                            label="Email"
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        />
                        <TextField
                            id="standard-name"
                            label="Password"
                        // value={this.state.name}
                        // onChange={this.handleChange('name')}
                        />
                        <div className="subscribe-button-container">
                            <div className="subscribe-button-background"></div>
                            <div className="subscribe-button">
                                sign up
                            </div>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Subscribe;