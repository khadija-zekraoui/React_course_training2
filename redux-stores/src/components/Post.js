import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'


class Post extends Component {

        handleClick = () => {
            this.props.deletePost(this.props.post.id);
            //redirect to home page
            this.props.history.push('/');
        }

        render() {
            console.log("Post ~ render ~ this.props", this.props)
            //we can access to post via this.props
            const post = this.props.post ? (
                <div className="post">
                    <h4 className="center">{this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            )
                : (<div className="center">Loding post ... </div>)
            return (
                <div className="container">
                    {post}
                </div>
            )
        }
    }

//ownProps props of the component before doing the mapping (attach redux state's data to the component)
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        //we can access this property by using component's props
        post: state.posts.find(post => post.id === id)
    }
}

//attach functions to use them in the component to dispatch redux actions and update the state
const mapDispatchToProps = (dispatch) => {
    return {
        //we can use this function by using component's props
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
