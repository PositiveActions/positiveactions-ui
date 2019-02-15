import React, { Component } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Link } from "react-router-dom";

class Comment extends Component {
    render() {

        const { comment } = this.props;

        return (
            <div className="comment-container">
                <Link to="/profile/1" className="profile">
                    <div className="profile-image">{comment.author.split(' ')[0][0] + comment.author.split(' ')[1][0]}</div>
                    <div className="profile-name">{comment.author}</div>
                </Link>
                <div className="comment-text">
                    <div className="comment-quotes"><FormatQuoteIcon></FormatQuoteIcon></div>
                    <p>{comment.message}</p>
                    <div className="comment-date">{comment.date}</div>
                </div>
            </div>
        );
    }
}

export default Comment;