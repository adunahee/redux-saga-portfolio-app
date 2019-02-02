import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProjectItem extends Component {
  render() {
    return (
      <div>
          <p>Name: {this.props.project.name}</p>
          <p>Description: {this.props.project.description}</p>
          <img src={this.props.project.thumbnail} />
          <p>Website: {this.props.project.website}</p>
          <p>GitHub: {this.props.project.github}</p>
          <p>Date Finished: {this.props.project.date_completed}</p>
      </div>
    )
  }
}

export default connect()(ProjectItem);