import React from 'react'
import Post from '../entities/Post'


const FetchPosts = () => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.map(post => new Post(post)));
}

const fetchSinglePost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(data => new Post(data))
}

const fetchAuthorPost = (idAuthor) => {

    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + idAuthor)
        .then(res => res.json())
        .then(data => data.map(post => new Post(post)))

}






export { FetchPosts, fetchSinglePost, fetchAuthorPost };