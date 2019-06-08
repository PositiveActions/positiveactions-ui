import React, { Component } from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Link } from "react-router-dom";

class Comment extends Component {

    state = {
        commentUser : {}
    }

    render() {

        const { comment, formatTimestamp, getUser } = this.props;

        return (
            <div className="comment-container">
                <Link to="/profile/1" className="profile">
                    {/* <div className="profile-image">{comment.author.split(' ')[0][0] + comment.author.split(' ')[1][0]}</div> */}
                    <div className="profile-image">{this.state.commentUser.username ? this.state.commentUser.username[0] : 'A'}</div>
                    <div className="profile-name">{this.state.commentUser.username ? this.state.commentUser.username : 'Anonymous'}</div>
                </Link>
                <div className="comment-text">
                    <div className="comment-quotes"><FormatQuoteIcon></FormatQuoteIcon></div>
                    <p>{comment.message}</p>
                    <div className="comment-date">{formatTimestamp(comment.timestamp, 'L')}</div>
                </div>
            </div>
        );
    }

    componentDidMount() {

        const { comment, formatTimestamp, getUser } = this.props;

        getUser(comment.user_id).then(res => {
            if (res) {
                this.setState({commentUser: res});
            }
        });
    }
}

export default Comment;