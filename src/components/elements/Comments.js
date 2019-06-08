import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

class Comments extends Component {
    render() {

        const { comments, userId } = this.props;

        let commentsElm = comments.length > 0 ? comments.map(comment => <React.Fragment key={comment.comment_id}><Comment comment={comment} formatTimestamp={this.props.formatTimestamp}></Comment><br></br></React.Fragment>) : null;

        commentsElm = commentsElm.reverse();

        return (
            <div className="comments-container">      
                <div className="comments-title">    
                    COMMENTS
                </div>
                <div className="comments">
                    {commentsElm}
                </div>
                <AddComment addCommentInput={this.props.addCommentInput} changeCommentInput={this.props.changeCommentInput} submitCommentInput={this.props.submitCommentInput} commentLength={this.props.commentLength} userId={userId}></AddComment>
            </div>
        );
    }
}

export default Comments;