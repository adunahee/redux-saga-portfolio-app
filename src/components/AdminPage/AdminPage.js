import React, { Component } from 'react'
import { connect } from 'react-redux';
import AdminTableRow from './../AdminPage/AdminTableRow';
import AdminForm from './../AdminPage/AdminForm';
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AdminPage extends Component {

  buildProjectRows = () => {
    return this.props.reduxStore.projects.map((project, index) => {
      return <AdminTableRow key={index} project={project} />
    })
  }

  handleReturn = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2>Admin View</h2>
        <Grid container
          direction="row"
          justify="space-between"
          aligh="baseline"
          spacing={24}
        >

          <Grid item md={4} >
            <h3>Add New Project</h3>
            <AdminForm />
          </Grid>
          <Grid item md={8} >
            <h3>Manage Existing Projects</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Project Name
              </TableCell>
                  <TableCell>
                    Project Description
              </TableCell>
              <TableCell>
                Tag
              </TableCell>
                  <TableCell>
                    Action
              </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.buildProjectRows()}
              </TableBody>
            </Table>
          </Grid>
          <Grid item lg={12}>
            <button onClick={this.handleReturn}>Return to Projects</button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapRStoProps = (reduxStore) => {
  return { reduxStore }
}

export default connect(mapRStoProps)(AdminPage)
