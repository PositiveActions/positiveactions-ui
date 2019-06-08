import React, { Component } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Link } from "react-router-dom";

class Comment extends Component {
    render() {

        const { comment, formatTimestamp } = this.props;

        return (
            <div className="comment-container">
                <Link to="/profile/1" className="profile">
                    {/* <div className="profile-image">{comment.author.split(' ')[0][0] + comment.author.split(' ')[1][0]}</div> */}
                    <div className="profile-image">?</div>
                    <div className="profile-name">Anonymous</div>
                </Link>
                <div className="comment-text">
                    <div className="comment-quotes"><FormatQuoteIcon></FormatQuoteIcon></div>
                    <p>{comment.message}</p>
                    <div className="comment-date">{formatTimestamp(comment.timestamp, 'L')}</div>
                </div>
            </div>
        );
    }
}

export default Comment;