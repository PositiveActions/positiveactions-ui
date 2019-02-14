import React, { Component } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

class Comment extends Component {
    render() {

        const { comment } = this.props;

        return (
            <div className="comment-container">
                <div className="profile">
                    <a href="/profile/1"><div className="profile-image">{comment.author.split(' ')[0][0] + comment.author.split(' ')[1][0]}</div></a>
                    <div className="profile-name">{comment.author}</div>
                </div>
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