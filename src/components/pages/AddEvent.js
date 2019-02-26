import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField, FormControl, InputLabel, Select, MenuItem, FilledInput } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import PlacesWithStandaloneSearchBox from '../elements/PlacesWithStandaloneSearchBox';
import Loader from '../elements/Loader';

@inject('EventsStore')
@inject('UserStore')
@observer
class AddEvent extends Component {
    render() {

        const { addEventTitle, addEventDescription, addEventDate, addEventCategory, addEventLocationName, addEventEmail, onAddEventChange, submitEvents, submittingEvent } = this.props.EventsStore;
        
        return (
            <div className="add-event-container">
                <HeaderAlt userLoggedIn={this.props.UserStore.userLoggedIn}></HeaderAlt>
                <div className="add-event-content">
                    <form>
                        <TextField
                            label="Event title"
                            className="event-input"
                            value={addEventTitle}
                            onChange={onAddEventChange.bind(this, 'title')}
                            variant="filled"
                        />
                        <TextField
                            label="Event description"
                            className="event-input"
                            multiline={true}
                            value={addEventDescription}
                            onChange={onAddEventChange.bind(this, 'description')}
                            rows={4}
                            rowsMax={4}
                            variant="filled"
                        />
                        <TextField
                            label="Event date"
                            type="date"
                            value={addEventDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={onAddEventChange.bind(this, 'date')}
                            variant="filled"
                            className="event-input"
                        />
                        <FormControl variant="filled" className="event-input">
                            <InputLabel htmlFor="filled-category-simple">Category</InputLabel>
                            <Select
                                value={addEventCategory}

                                onChange={onAddEventChange.bind(this, 'category')}
                                input={<FilledInput name="category" id="filled-category-simple" />}
                            >
                                <MenuItem value={'global-ecology'}>Global Ecology</MenuItem>
                                <MenuItem value={'biodiversity'}>Biodiversity</MenuItem>
                                <MenuItem value={'energy'}>Energy</MenuItem>
                                <MenuItem value={'veganism'}>Veganism</MenuItem>
                            </Select>
                        </FormControl>
                        <PlacesWithStandaloneSearchBox addEventLocationName={addEventLocationName} onAddEventChange={onAddEventChange}></PlacesWithStandaloneSearchBox>
                        <TextField
                            label="Your email"
                            className="event-input"
                            value={addEventEmail}
                            onChange={onAddEventChange.bind(this, 'email')}
                            variant="filled"
                            type="email"
                        />
                        <div className="add-event-button-container" onClick={submitEvents}>
                            <div className="add-event-button-background"></div>
                            <div className="add-event-button">
                                add event
                            </div>
                        </div>
                    </form>
                </div>
                <div className={'submitting-event-' + (submittingEvent ? 'visible' : 'hidden')}>
                    <div className="loader"><Loader></Loader></div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default AddEvent;