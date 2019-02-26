import React, { Component } from 'react';
import {connect} from 'react-redux';

class TagsDropdown extends Component {

    buildTagsOptions = () => {
        return this.props.tags.map((tagObj, i) => {
            return <option key={i} value={tagObj.id}>{tagObj.name}</option>
        })
    }

  render() {
    return (
      <div>
            <label htmlFor='tag_id'>Tags</label>
            {this.props.tags.length > 1 &&
                <select value={this.props.tag_id === null ? '' : this.props.tag_id}
                    onChange={this.props.handleChange}
                    id="tag_id">
                    <option value='' disabled>Choose One</option>
                    {this.buildTagsOptions()}
                </select>
            }
      </div>
    )
  }
}

const mapRStoProps = (reduxStore) => {
    return { tags: reduxStore.tags }
}

// export default connect(mapRStoProps)(TagsDropdown);