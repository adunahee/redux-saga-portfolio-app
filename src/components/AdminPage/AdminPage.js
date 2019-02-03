import React, { Component } from 'react'
import { connect } from 'react-redux';
import AdminTableRow from './../AdminPage/AdminTableRow';
import AdminForm from './../AdminPage/AdminForm';

class AdminPage extends Component {

  buildProjectRows = () => {
    return this.props.reduxStore.projects.map( (project, index) => {
      return <AdminTableRow key={index} project={project}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Admin View</h2>
        <h3>Add New Project</h3>
        <AdminForm />
        <h3>Manage Existing Projects</h3>
        <table>
          <thead>
            <tr>
              <th>
                Project Name
              </th>
              <th>
                Project Description
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
      {this.buildProjectRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapRStoProps = (reduxStore) => {
  return { reduxStore }
}

export default connect(mapRStoProps)(AdminPage)
