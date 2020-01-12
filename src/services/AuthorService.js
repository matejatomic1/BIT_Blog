import React from 'react'
import Author from '../entities/Author'


const FetchAuthors = () => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data.map(author => new Author(author)))

}

const fetchSingleAuthor = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.json())
        .then(data => new Author(data))
}




export { FetchAuthors, fetchSingleAuthor };