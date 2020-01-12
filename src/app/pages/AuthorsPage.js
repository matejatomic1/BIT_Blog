import React from 'react'
import { Link } from "react-router-dom";
import { FetchAuthors } from '../../services/AuthorService'

import PostCounter from '../components/author/PostCounter'


class AuthorsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allAuthor: []
        }
    }

    componentDidMount() {

        FetchAuthors().then(authors => this.setState({ allAuthor: authors }))
    }

    render() {

        console.log(this.state.allAuthor);

        if (this.state.allAuthor.length === 0) {
            return <h3>Loading...</h3>
        }

        return <>
            <main>
                <h1 className='homeHeader'>AUTHORS ({this.state.allAuthor.length})</h1>

                {this.state.allAuthor.map((author, i) => {

                    return <div key={i} className='authorName'><Link to={`/authors/${author.id}`}>{author.name}
                        <PostCounter authorId={author.id} />

                    </Link></div >



                })}

            </main>


        </>

    }
}






export default AuthorsPage;