import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProjectItem extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.project)}
      </div>
    )
  }
}

export default connect()(ProjectItem);