import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

class Comments extends Component {
    render() {

        const { comments, userId, getUser, userLoggedIn } = this.props;

        let commentsElm = comments.length > 0 ? comments.map(comment => <React.Fragment key={comment.comment_id}><Comment comment={comment} formatTimestamp={this.props.formatTimestamp} getUser={getUser}></Comment><br></br></React.Fragment>) : null;

        commentsElm = commentsElm ? commentsElm.reverse() : null;

        return (
            <div className="comments-container">
                {commentsElm ?
                <React.Fragment>
                    <div className="comments-title">    
                        COMMENTS
                    </div>
                    <div className="comments">
                        {commentsElm}
                    </div>
                    {userLoggedIn ? <AddComment addCommentInput={this.props.addCommentInput} changeCommentInput={this.props.changeCommentInput} submitCommentInput={this.props.submitCommentInput} commentLength={this.props.commentLength} userId={userId} getUser={getUser}></AddComment> : null}
                </React.Fragment>
                : null }
            </div>
        );
    }
}

export default Comments;