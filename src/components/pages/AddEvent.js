import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Footer from '../elements/Footer';
import { TextField, FormControl, InputLabel, Select, MenuItem, FilledInput } from '@material-ui/core';
import { inject, observer } from "mobx-react";
import PlacesWithStandaloneSearchBox from '../elements/PlacesWithStandaloneSearchBox';
import Loader from '../elements/Loader';
import BackupIcon from '@material-ui/icons/Backup';
import eventPic1 from '../../assets/thumbnails/event-pic1.jpg';
import eventPic2 from '../../assets/thumbnails/event-pic2.jpg';
import eventPic3 from '../../assets/thumbnails/event-pic3.jpg';
import eventPic4 from '../../assets/thumbnails/event-pic4.jpg';
import eventPic5 from '../../assets/thumbnails/event-pic5.jpg';
import eventPic6 from '../../assets/thumbnails/event-pic6.jpg';
import eventPic7 from '../../assets/thumbnails/event-pic7.jpg';
import eventPic8 from '../../assets/thumbnails/event-pic8.jpg';
import eventPic9 from '../../assets/thumbnails/event-pic9.jpg';
import eventPic10 from '../../assets/thumbnails/event-pic10.jpg';
import eventPic11 from '../../assets/thumbnails/event-pic11.jpg';
import eventPic12 from '../../assets/thumbnails/event-pic12.jpg';
import eventPic13 from '../../assets/thumbnails/event-pic13.jpg';
import eventPic14 from '../../assets/thumbnails/event-pic14.jpg';

@inject('EventsStore')
@inject('UserStore')
@observer
class AddEvent extends Component {
    render() {
    
        const { addEventTitle, addEventDescription, addEventDate, addEventCategory, addEventLocationName, addEventEmail, onAddEventChange, submitEvents, submittingEvent, addEventDescriptionLength, addEventImage } = this.props.EventsStore;

        const { userId } = this.props.UserStore;
        
        return (
            <div className="add-event-container">
                <HeaderAlt userLoggedIn={this.props.UserStore.userLoggedIn} userObject={this.props.UserStore.userObject} userId={this.props.UserStore.userId}></HeaderAlt>
                <div className="add-event-content">
                    <form>
                        <TextField
                            label="Event title"
                            className="event-input"
                            value={addEventTitle}
                            onChange={onAddEventChange.bind(this, 'title')}
                            variant="filled"
                            inputProps={{
                                maxLength: 50,
                            }}
                        />
                        <div className="event-description-container">
                            <TextField
                                label="Event description"
                                className="event-input"
                                multiline={true}
                                value={addEventDescription}
                                onChange={onAddEventChange.bind(this, 'description')}
                                rows={4}
                                rowsMax={4}
                                variant="filled"
                                inputProps={{
                                    maxLength: 500,
                                }}
                            />
                            <div className="input-event-description-text">{addEventDescriptionLength} / 500</div>
                        </div>
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
                        <div className="image-selector-container">
                            <div className="image-selector-title">Select an image</div>
                            <div className="image-selector">
                                <img className={addEventImage === '1' ? 'selected-image' : ''} src={eventPic1} alt="event 1" onClick={this.changeEventImage.bind(this, '1', eventPic1)}></img>
                                <img className={addEventImage === '2' ? 'selected-image' : ''} src={eventPic2} alt="event 2" onClick={this.changeEventImage.bind(this, '2', eventPic2)}></img>
                                <img className={addEventImage === '3' ? 'selected-image' : ''} src={eventPic3} alt="event 3" onClick={this.changeEventImage.bind(this, '3', eventPic3)}></img>
                                <img className={addEventImage === '4' ? 'selected-image' : ''} src={eventPic4} alt="event 4" onClick={this.changeEventImage.bind(this, '4', eventPic4)}></img>
                                <img className={addEventImage === '5' ? 'selected-image' : ''} src={eventPic5} alt="event 5" onClick={this.changeEventImage.bind(this, '5', eventPic5)}></img>
                                <img className={addEventImage === '6' ? 'selected-image' : ''} src={eventPic6} alt="event 6" onClick={this.changeEventImage.bind(this, '6', eventPic6)}></img>
                                <img className={addEventImage === '7' ? 'selected-image' : ''} src={eventPic7} alt="event 7" onClick={this.changeEventImage.bind(this, '7', eventPic7)}></img>
                                <img className={addEventImage === '8' ? 'selected-image' : ''} src={eventPic8} alt="event 8" onClick={this.changeEventImage.bind(this, '8', eventPic8)}></img>
                                <img className={addEventImage === '9' ? 'selected-image' : ''} src={eventPic9} alt="event 9" onClick={this.changeEventImage.bind(this, '9', eventPic9)}></img>
                                <img className={addEventImage === '10' ? 'selected-image' : ''} src={eventPic10} alt="event 10" onClick={this.changeEventImage.bind(this, '10', eventPic10)}></img>
                                <img className={addEventImage === '11' ? 'selected-image' : ''} src={eventPic11} alt="event 11" onClick={this.changeEventImage.bind(this, '11', eventPic1)}></img>
                                <img className={addEventImage === '12' ? 'selected-image' : ''} src={eventPic12} alt="event 12" onClick={this.changeEventImage.bind(this, '12', eventPic12)}></img>
                                <img className={addEventImage === '13' ? 'selected-image' : ''} src={eventPic13} alt="event 13" onClick={this.changeEventImage.bind(this, '13', eventPic13)}></img>
                                <img className={addEventImage === '14' ? 'selected-image' : ''} src={eventPic14} alt="event 14" onClick={this.changeEventImage.bind(this, '14', eventPic14)}></img>
                                <div className="image-upload" onClick={this.uploadImage}>
                                    <div className="upload-button-container">
                                        <div className="upload-button-background"></div>
                                        <div className="upload-button">
                                            <BackupIcon></BackupIcon>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="add-event-button-container" onClick={submitEvents.bind(this, userId)}>
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

    changeEventImage = (imageCode, imageUrl, e) => {
        const event = {target: {value: imageCode, url: imageUrl}};
        this.props.EventsStore.onAddEventChange('image', event);
    }

    uploadImage = () => {
        console.log('upload image');
    } 
}

export default AddEvent;