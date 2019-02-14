import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField } from '@material-ui/core';

class Connect extends Component {
    render() {
        return (
            <div className="connect-container">
                <HeaderAlt></HeaderAlt>
                <div className="connect-content">
                    <form className="connection-form" noValidate autoComplete="off">
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
                        <div className="connect-button-container">
                            <div className="connect-button-background"></div>
                            <div className="connect-button">
                                connect
                            </div>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Connect;