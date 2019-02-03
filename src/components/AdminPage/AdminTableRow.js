import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTableRow extends Component {

    handleDelete = () => {
        const confirmation = window.confirm('Are you sure you want to permanently delete this project?');
        if (confirmation) {
            this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.props.project.id })
        }
    }

    buildProjectRow = () => {
        // console.log(Object.keys(this.props.project));
        const projectValues = Object.values(this.props.project);
        const projectKeys = Object.keys(this.props.project);
        return projectKeys.map((key, i) => {
            if (key === "project_name" || key === "description") {
                return <td key={i}>{projectValues[i]}</td>
            }
            //before finished with mapping, adding in buttons cell
            else if (i === projectKeys.length - 1) {
                return <td key={i}>
                    <button onClick={this.handleDelete}>Delete</button>
                    <button onClick={this.handleUpdate}>Update</button>
                </td>
            } else {
                return null
            }
        })
    }

    render() {
        //   console.log(this.props.project);
        return (
            <tr>
                {this.buildProjectRow()}
            </tr>
        )
    }
}

export default connect()(AdminTableRow);