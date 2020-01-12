import React from 'react'

import { Link } from 'react-router-dom'
import PostSnippet from '../components/post/PostSnippet';
import { FetchPosts } from '../../services/PostService'



class PostPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allPosts: []
        }
    }


    componentDidMount() {
        FetchPosts().then(posts => this.setState({ allPosts: posts }))
    }

    render() {



        if (this.state.allPosts.length === 0) {
            return <h2>Loading...</h2>
        }
        const mapPost = this.state.allPosts.map((post, i) => {
            return <PostSnippet key={i} post={{ id: post.id, title: post.title, text: post.body }} />


        })


        return (
            <main>
                <h1 className='homeHeader'>POSTS</h1>

                {mapPost}



            </main>
        );
    }
}


export default PostPage;
