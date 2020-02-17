import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Api from "../Utils/Api";

class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts,
            errors: this.props.errors
        };
    }

    componentDidMount() {
        this.getPosts();
    }

    async getPosts() {
        this.updatePostState(await Api.getPosts()).catch(error => {
            if (error.response) {
                this.setState({
                    errors: error.response.data
                });
            }
        });
    }

    async updatePostState(data) {
        if (data) {
            this.setState({
                posts: data
            });
        }
    }

    renderErrorFor() {
        if (this.state.errors.lenght) {
            return <ErrorAlert>{this.state.errors[0]}</ErrorAlert>;
        }
    }

    render() {
        const {posts} = this.state;

        return posts.map(post=>(
            <Post key={post.uuid} {...post}/>
        ))
    }
}

MyPosts.defaultProps = {
    posts: [],
    errors: []
};

MyPosts.propTypes = {
    posts: PropTypes.array,
    errors: PropTypes.array
};

export default MyPosts;
