import React, { Component } from 'react';
import { Link } from "react-router-dom";
import reactImg from '../react.png';
import { connect } from 'react-redux'


class Home extends Component {

    render() {
        console.log("Home ~ render ~ this.props", this.props);
        const { posts } = this.props;
        
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={reactImg} alt=""></img>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

//take the state and map some of its data to props
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

//connect return higher-order component 
//it connects this component with the store.
export default connect(mapStateToProps)(Home);
