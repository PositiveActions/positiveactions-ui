import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    render() {

        const { comments } = this.props;
        console.log(comments);
        const commentsElm = comments.map(comment => <React.Fragment key={comment.id}><Comment comment={comment}></Comment><br></br></React.Fragment>);

        return (
            <div className="comments-container">
                <div className="comments-title">
                    COMMENTS
                </div>
                <div className="comments">
                    {commentsElm}
                </div>
            </div>
        );
    }
}

export default Comments;