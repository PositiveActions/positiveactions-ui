import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField } from '@material-ui/core';

class AddEvent extends Component {
    render() {
        return (
            <div className="add-event-container">
                <HeaderAlt></HeaderAlt>
                <div className="add-event-content">
                    <form>
                        <TextField
                            label="Event title"
                            className="event-input"
                            // value={this.state.name}
                            // onChange={this.handleChange('name')}
                            variant="filled"
                        />
                        <TextField
                            label="Event description"
                            className="event-input"
                            multiline={true}
                            // value={this.props.addCommentInput}
                            // onChange={this.props.changeCommentInput}
                            rows={4}
                            rowsMax={4}
                            variant="filled"
                        />
                        <TextField
                            label="Event date"
                            type="date"
                            defaultValue="2019-02-25"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            className="event-input"
                        />
                        <div className="add-event-button-container">
                            <div className="add-event-button-background"></div>
                            <div className="add-event-button">
                                add event
                            </div>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default AddEvent;