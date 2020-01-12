import React from 'react';
import { fetchPostCount } from '../../../services/PostCount';



class PostCounter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            totalPostAuthor: null

        }
    }

    componentDidMount() {
        fetchPostCount(this.props.authorId).then(allPosts => this.setState({ totalPostAuthor: allPosts }))

        console.log(this.state.totalPostAuthor);


    }

    render() {

        if (!this.state.totalPostAuthor) {
            return <h3>loading....</h3>
        }
        return <>
            <span> ({this.state.totalPostAuthor} posts) </span>
        </>
    }
}

export default PostCounter