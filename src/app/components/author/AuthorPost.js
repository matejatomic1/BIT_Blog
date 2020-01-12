import React from 'react';
import { fetchAuthorPost } from '../../../services/PostService';




class AuthorPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    componentDidMount() {
        fetchAuthorPost()

    }

    render() {
        return <>






        </>
    }



}


export { AuthorPost }




