import React, { Component } from 'react'

export default class AdminTableRow extends Component {
  render() {
      console.log(this.props.project);
      
    return (
      <tr>
          <td>test project name</td>
          <td>project buttons <button>Delete</button></td>
      </tr>
    )
  }
}
