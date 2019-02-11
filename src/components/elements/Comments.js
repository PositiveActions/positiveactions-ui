import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    render() {
        return (
            <div className="comments-container">
                <div className="comments-title">
                    COMMENTS
                </div>
                <div className="comments">
                    <Comment></Comment>
                    <br></br>
                    <Comment></Comment>
                </div>
            </div>
        );
    }
}

export default Comments;