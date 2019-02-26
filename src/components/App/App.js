import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './../Header/Header';
import ProjectPage from './../ProjectPage/ProjectPage';

import { Grid, Paper } from '@material-ui/core';

// disabled for security reasons and to limit upkeep
// import AdminPage from './../AdminPage/AdminPage';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount() {
    // this.props.dispatch({type: 'FETCH_TAGS'});
    //also calls a fetch project data
    // this.props.dispatch({type: 'FETCH_COMMIT_DATA'});
    this.props.dispatch({ type: 'FETCH_PROJECTS' })
  }
  render() {
    return (
      <Grid container
        direction='column'
        justify="flex-start"
        alignItems="center"
        spacing={24}
        className="App"
      >
        <Grid item
          xs={12}
          md={10}
          lg={8}
        >
          <Paper style={{ backgroundColor: '#4f4f4a' }}>
            <Header />
          </Paper>
        </Grid>

        <Router>
          <Grid item
            xs={12}
            md={10}
            lg={8}>
            <Paper style={{ backgroundColor: '#F4E8A4' }}>
              <Route exact path='/' component={ProjectPage} />

              {/* <Route exact path='/admin' component={AdminPage} /> */}
              {/* <Link to='/'>Projects</Link>
            <Link to='/admin'>Admin</Link> */}
            </Paper>
          </Grid>
        </Router>
      </Grid>
    );
  }
}

export default connect()(App);
