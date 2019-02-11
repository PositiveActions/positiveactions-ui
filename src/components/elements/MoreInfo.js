import React, { Component } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class MoreInfo extends Component {
    render() {
        return (
            <div className="more-info-container">
                <div className="more-info-element">
                    <div className="element-name">
                        Email contact
                    </div>
                    <div className="element-value">
                        info@eventwebsite.com
                    </div>
                </div>
                <div className="more-info-element">
                    <div className="element-name">
                        Attending
                    </div>
                    <div className="element-value">
                        12 people are interested in the event
                    </div>
                </div>
                <div className="more-info-element">
                    <div className="element-name">
                        Website
                    </div>
                    <div className="element-value">
                        http://www.eventwebsite.com
                    </div>
                </div>
                <div className="interested-button"><ArrowRightAltIcon></ArrowRightAltIcon> &nbsp; i'm interested</div>
            </div>
        );
    }
}

export default MoreInfo;