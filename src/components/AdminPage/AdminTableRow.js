import React, { Component } from 'react'

export default class AdminTableRow extends Component {

    buildProjectRow = () => {
        console.log(Object.keys(this.props.project));
        const projectValues = Object.values(this.props.project);
        const projectKeys = Object.keys(this.props.project);
        return projectKeys.map((key, i) => {
            if (key === "project_name" || key === "description") {
                return <td key={i}>{projectValues[i]}</td>
            } else if (i === projectKeys.length - 1) {
                return <td key={i}>
                    <button onClick={this.handleDelete}>Delete</button>
                    <button onClick={this.handleUpdate}>Update</button>
                </td>
            } else {
                return null}
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
