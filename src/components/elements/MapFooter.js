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
                <ArrowDownwardIcon onClick={this.onArrowClicked} className="arrow"></ArrowDownwardIcon>
            </div>
        );
    }
}

export default MapFooter;