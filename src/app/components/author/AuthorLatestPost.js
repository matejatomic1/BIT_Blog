import React from 'react'
import { fetchAuthorPost } from '../../../services/PostService';
import { Link } from 'react-router-dom'



class AuthorLatestPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allPostsAuthor: []

        }

    }

    componentDidMount() {
        fetchAuthorPost(this.props.authorId).then(allPost => this.setState({ allPostsAuthor: allPost }))
    }



    render() {

        if (this.state.allPostsAuthor.length === 0) {
            return <h4>loading...</h4>
        }

        const postsFromSameAuthor = this.state.allPostsAuthor.sort(function (post1, post2) { return parseInt(post2.id) - parseInt(post1.id) }).slice(0, 3)

        const latestPost = postsFromSameAuthor.map((res, i) => {

            return <p key={i}><Link to={`/posts/${res.id}`}>{res.title}  </Link></p >


        })


        return <>

            <h3>3 latest posts from same author</h3>

            {latestPost}


        </>
    }

}


export default AuthorLatestPost;