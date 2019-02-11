import React, { Component } from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class MapFooter extends Component {

    onArrowClicked = (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.getElementById('filters-container').offsetTop, behavior: 'smooth' })
    }

    render() {
        return (
            <div className="map-footer-container">
                <div className="arrow-container">
                    <svg width="40" height="40">
                        <circle className="outer" cx="20" cy="20" r="15"/>
                    </svg>
                    <ArrowDownwardIcon onClick={this.onArrowClicked} className="arrow"></ArrowDownwardIcon>       
                </div>
            </div>
        );
    }
}

export default MapFooter;