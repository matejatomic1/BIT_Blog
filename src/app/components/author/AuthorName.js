import React from 'react'
import { Link } from 'react-router-dom'
import { fetchSingleAuthor } from '../../../services/AuthorService'


class AuthorName extends React.Component {
    constructor(props) {
        super(props)
        this.id = props.authorId;
        this.state = {
            author: null

        }
    }

    componentDidMount() {
        fetchSingleAuthor(this.props.authorId)
            .then(author => this.setState({ author: author }))

        console.log(this.state.author);
    }



    render() {

        if (!this.state.author) {
            return <h1>LOADING</h1>
        }

        return <>
            <h3><Link to={`/authors/${this.id}`}>{this.state.author.name}</Link></h3> <br /> <hr />
        </>

    }
}

export default AuthorName