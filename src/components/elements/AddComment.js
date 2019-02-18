import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

class AddComment extends Component {

    render() {
        return (
            <div className="add-comment-container">
                <div className="add-comment-main">
                    <Link to="/profile/1" className="profile">
                        {/* <div className="profile-image">{comment.author.split(' ')[0][0] + comment.author.split(' ')[1][0]}</div> */}
                        <div className="profile-image">AN</div>
                        <div className="profile-name">Anonymous</div>
                    </Link>
                    <div className="add-comment-input">
                        <TextField
                            id="filled-full-width"
                            placeholder="Add a comment"
                            fullWidth
                            variant="filled"
                            multiline={true}
                            value={this.props.addCommentInput}
                            onChange={this.props.changeCommentInput}
                            rows={4}
                            rowsMax={4}
                        />
                    </div>
                </div>
                <div className="add-comment-button-container" onClick={this.props.submitCommentInput}>
                    <div className="add-comment-button-background"></div>
                    <div className="add-comment-button">
                        Send
                    </div>
                </div>
            </div>
        );
    }
}

export default AddComment;