import React, { Component } from 'react';
import eventImage from '../../assets/event1.jpg';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class Event extends Component {
    render() {
        return (
            <div className="event-container">
                <div className="background-square"></div>

                <div className="event-content">
                    <div className="event-meta-info">
                        <div className="event-date">
                            21/02 
                        </div>
                        <div className="event-location">
                            Taipei, Zongzheng District
                        </div>
                    </div>
                    <div className="event-detail-info">
                        <div className="event-detail-content">
                            <div className="event-title">
                                Lorem ipsum dolor sit amet consectetur
                            </div>
                            <div className="event-description">
                                Duis nec turpis pellentesque, sagittis lacus quis, commodo elit. Phasellus volutpat maximus neque vehicula bibendum. Curabitur id augue vel est tincidunt condimentum, sagittis lacus quis, commodo elit...
                            </div>
                            <a href="/events/1">
                                <div className="event-button">
                                    <ArrowRightAltIcon></ArrowRightAltIcon> &nbsp; more details
                                </div>
                            </a>
                        </div>
                        <div className="event-image">
                            <img src={eventImage} alt="event pic" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;