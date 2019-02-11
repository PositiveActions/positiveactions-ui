import React, { Component } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

class Comment extends Component {
    render() {
        return (
            <div className="comment-container">
                <div className="profile">
                    <div className="profile-image">AN</div>
                    <div className="profile-name">Anonymous</div>
                </div>
                <div className="comment-text">
                    <div className="comment-quotes"><FormatQuoteIcon></FormatQuoteIcon></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium eleifend orci, ac ullamcorper ante accumsan ut. Aliquam erat volutpat. Etiam interdum eget urna auctor rutrum. Aenean consequat semper condimentum.</p>
                    <div className="comment-date">12/02/2019</div>
                </div>
            </div>
        );
    }
}

export default Comment;