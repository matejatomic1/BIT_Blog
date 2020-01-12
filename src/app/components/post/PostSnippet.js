import React from 'react'
import { Link } from 'react-router-dom'


const PostSnippet = ({ post }) => (
    <>
        <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
        <p>{post.text}</p> <br /> <hr />
    </>
)

export default PostSnippet