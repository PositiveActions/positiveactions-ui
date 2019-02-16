import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class BackToMap extends Component {
    render() {
        return (
            <div className="back-to-map-container" onClick={this.backToTop}>
                <svg width="40" height="40" className="circle-svg">
                    <circle className="outer" cx="20" cy="20" r="15"/>
                </svg>
                <ArrowUpwardIcon></ArrowUpwardIcon>
            </div>
        );
    }

    backToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

export default BackToMap;