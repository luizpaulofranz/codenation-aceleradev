import React, { Component } from 'react';
import { isLogged, getUser } from '../services/loginService'
import commentsService from '../services/commentsService'
import { slugify } from '../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CommentsBlock extends Component {

    constructor(props) {
        super(props)

        this.slug = slugify(props.recipe.title);

        this.state = {
            comments: [],
            comment: ''
        }
    }

    componentDidMount() {
        const comments = commentsService.get(this.slug);
        this.setState({comments})
    }

    commentInputHandler = (e) => {
        e.preventDefault();
        this.setState({comment: e.target.value});
    }

    saveComment = (e) => {
        e.preventDefault();
        if (commentsService.insert(this.slug, {comment: this.state.comment})) {
            const comments = commentsService.get(this.slug);
            this.setState({comments, comment: ''})
        }
    }

    removeComment = (e, comment) => {
        e.preventDefault();
        if (commentsService.delete(this.slug, comment)) {
            const comments = commentsService.get(this.slug);
            this.setState({comments})
        }
    }

    renderComment = (comment, index) => (
        <div key={index} className="Comment media text-muted pt-3">
            <FontAwesomeIcon className="mr-2" size="3x" icon="user-circle"/>
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">@{comment.author}</strong>
                {comment.comment}
            </p>
            {isLogged() && getUser().username === comment.author ? 
                <FontAwesomeIcon onClick={(e) => this.removeComment(e, comment)} icon="trash"/>
            : null}
        </div>
    )

    render() {
        return (
            <div className="text-left">
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">
                        Comments
                    </h6>
                    {this.state.comments.map( (comment, index) => this.renderComment(comment, index) )}
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Comment
                        </label>
                        <textarea
                            disabled={!isLogged()}
                            value={this.state.comment}
                            onChange={this.commentInputHandler}
                            required="required"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Insert your comment here"
                        />
                    </div>
                    <button
                        disabled={!isLogged()}
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.saveComment}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default CommentsBlock