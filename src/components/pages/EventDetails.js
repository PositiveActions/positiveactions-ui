import React, { Component } from 'react';
import HeaderAlt from '../elements/HeaderAlt';
import Map from '../elements/Map';
import MoreInfo from '../elements/MoreInfo';
import Comments from '../elements/Comments';
import Footer from '../elements/Footer';

class EventDetails extends Component {
    render() {
        return (
            <div className="event-details-container">
                <HeaderAlt></HeaderAlt>

                <div className="event-details-content">
                    <div className="event-meta-info">
                        <div className="event-date">
                            21/02
                        </div>
                        <div className="event-title">
                            Lorem ipsum dolor sit amet consectetur
                        </div>
                    </div>
                    <div className="event-description">
                        <p>
                            &nbsp; &nbsp; &nbsp; &nbsp;Duis nec turpis pellentesque, sagittis lacus quis, commodo elit. Phasellus volutpat maximus neque vehicula bibendum. Curabitur id augue vel est tincidunt condimentum, sagittis lacus quis, commodo elit sed non sem aliquam, venenatis quam vel, euismod tortor. 
                            <br /> Cras condimentum dui eget justo finibus volutpat. Donec posuere leo erat, quis tristique ex mollis id. Pellentesque rhoncus, justo vel sodales tempor, nibh dui volutpat elit, vel congue magna lectus sit amet erat. Donec neque sapien.
                        </p>
                    </div>
                    <div className="event-diverse-info">
                        <div className="event-other-info">
                            <MoreInfo></MoreInfo>
                        </div>
                        <div className="event-map">
                            <Map></Map>
                        </div>
                    </div>
                </div>
                <Comments></Comments>
                <Footer></Footer>
            </div>
        );
    }
}

export default EventDetails;