import axios from 'axios';
import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post: null
    }

    componentDidMount() {

        //we can retrieve parameters form the URL using props->match->params
        //console.log(this.props);
        console.log(this.props.match.params.post_id)
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.post_id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            });

        console.log(this.state.post);

    }

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
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
