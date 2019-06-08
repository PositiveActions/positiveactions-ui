import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

class AddComment extends Component {

    state = {
        commentUser: {}
    }

    render() {

        return (
            <div className="add-comment-container">
                <div className="add-comment-main">
                    <Link to="/profile/1" className="profile">
                        {/* <div className="profile-image">{comment.author.split(' ')[0][0] + comment.author.split(' ')[1][0]}</div> */}
                        <div className="profile-image">{this.state.commentUser.username ? this.state.commentUser.username[0] : 'A'}</div>
                        <div className="profile-name">{this.state.commentUser.username ? this.state.commentUser.username : 'Anonymous'}</div>
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
                            inputProps={{
                                maxLength: 200,
                            }}
                        />
                        <div className="input-length-text">{this.props.commentLength} / 200</div>
                    </div>
                </div>
                <div className="add-comment-button-container" onClick={this.onButtonClicked}>
                    <div className="add-comment-button-background"></div>
                    <div className="add-comment-button">
                        Send
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getUser(this.props.userId).then(res => {
            if (res) {
                this.setState({commentUser: res});
            }
        });
    }

    onButtonClicked = (e) => {
        this.props.submitCommentInput(this.props.userId);
        document.getElementById('filled-full-width').value = '';
    }
}

export default AddComment;