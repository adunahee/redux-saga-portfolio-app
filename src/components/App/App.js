import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import Header from './../Header/Header';
import ProjectPage from './../ProjectPage/ProjectPage';
import AdminPage from './../AdminPage/AdminPage';

import {connect} from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_TAGS'})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Link to='/'>Projects</Link>
            <Link to='/admin'>Admin</Link>
            <Route exact path='/' component={ProjectPage}/>
            <Route exact path='/admin' component={AdminPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
