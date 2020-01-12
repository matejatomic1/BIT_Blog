import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'
import SinglePost from './pages/SinglePost'
import { Switch, Route, Redirect } from "react-router-dom";
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import AuthorsPage from './pages/AuthorsPage'
import AboutAuthor from './pages/AboutAuthor'
import {CreateNewPost} from './pages/CreateNewPost'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>

          <Route exact path='/home' component={PostPage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/authors" component={AuthorsPage} />

          <Route exact path="/post/new" component={CreateNewPost} />
          <Route exact path="/authors/:authorId" component={AboutAuthor} />
          <Route path="/posts/:postId" component={SinglePost} />
          <Redirect from='/' to='/home' />


        </Switch>
        <Footer />
      </Fragment>
    );

  }
}
export default App;
