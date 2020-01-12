import React from 'react'
import { Switch, Route } from "react-router-dom";
import PostSnippet from '../components/post/PostSnippet'
import { fetchSinglePost } from '../../services/PostService';
import AuthorName from '../components/author/AuthorName'
import AuthorLatestPost from '../components/author/AuthorLatestPost';


class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null
        }
    }

    componentDidMount() {
        fetchSinglePost(this.props.match.params.postId)
            .then(post => this.setState({ post: post }))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            fetchSinglePost(this.props.match.params.postId)
                .then(post => this.setState({ post: post }))
        }



    }



    render() {
        if (!this.state.post) {
            return <h3>LOADING</h3>

        }

        return <main>
            <h1>{this.state.post.title}</h1>

            <AuthorName authorId={this.state.post.userId} />

            {this.state.post.body}
            <hr />


            <AuthorLatestPost authorId={/* this.props.match.params.postId */this.state.post.userId} />
        </main>
    }
}





export default SinglePost