import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

    return <>
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">BitBlog</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/post/new">Create New Post</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>


    </>

}


export default Header;