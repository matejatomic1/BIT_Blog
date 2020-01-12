import React from 'react'
import { fetchSingleAuthor } from '../../services/AuthorService'
import AuthorAddress from '../components/author/AuthorAddress'
import AuthorCompany from '../components/author/AuthorCompany'
import { Link } from "react-router-dom";

class AboutAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: null
        }

    }
    componentDidMount() {
        fetchSingleAuthor(this.props.match.params.authorId).then(author => this.setState({ author: author }))

    }

    render() {

        if (!this.state.author) {
            return <h3>LOADING</h3>


        }


        return <main>
            <p > <Link to="/authors">&#8592; All Authors</Link></p>
            <div className=' flex-container'>
                <div><img className='image' src='https://comps.gograph.com/noam-chomsky-caricature_gg106723099.jpg' /></div>
                <div className='nameSurnameBox'>
                    <h1>Name: {this.state.author.name}</h1>
                    <h1>Username: {this.state.author.username}</h1>
                    <h1>email: {this.state.author.email}</h1>
                    <h1>phone: {this.state.author.phone}</h1>

                </div>
            </div>

            <AuthorAddress address={this.state.author} />
            <AuthorCompany company={this.state.author} />



        </main>
    }
}



export default AboutAuthor


