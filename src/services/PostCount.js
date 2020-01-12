import React from 'react';


const fetchPostCount = (idAuthor) => {

    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + idAuthor)
        .then(res => res.json())
        .then(data => data.length)

}


export { fetchPostCount }