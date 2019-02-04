import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import TagsDropdown from './TagsDropdown';


class AdminTableRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tag_id: this.determineTagID(),
            project_id: this.props.project.id
        }
    }


    determineTagID = () => {
        const projectTagName = this.props.project.tag_name;
        //this sets state of tag_id by comparing projectTagName and tags.name 
        // and returning id that matches
        const nameToTagID = () => {
            const tagIDs = this.props.tags.map(tagObj => {
                return tagObj.id
            });
            const tagNames = this.props.tags.map(tagObj => {
                return tagObj.name
            });

            return tagIDs.filter((tagID, i) => {
                // console.log(tagID);
                // console.log(this.props.project.tag_name);
                if (tagNames[i] === this.props.project.tag_name) {
                    return tagID
                } else {
                    return null;
                }
            }).join();
        }

        return projectTagName === null ? null : nameToTagID();
    }

    handleDelete = () => {
        const confirmation = window.confirm('Are you sure you want to permanently delete this project?');
        if (confirmation) {
            this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.props.project.id })
        }
    }

    handleChange = (event) => {
        this.setState({ tag_id: event.target.value })
    }

    updateTag = () => {
        this.props.dispatch({type: 'UPDATE_PROJECT_TAG', payload: this.state})
    }

    tagsPopup = () => (
        <Popup
            trigger={<button> Update Tag </button>}
            modal
            closeOnDocumentClick
        >
            <div>
                <p>Please choose the new tag you want on {this.props.project.project_name}.</p>
                <TagsDropdown handleChange={this.handleChange} tag_id={this.state.tag_id} />
                <button onClick={this.updateTag}>Finish Update</button>
            </div>
        </Popup>
    )

    buildProjectRow = () => {
        // console.log(Object.keys(this.props.project));
        const projectValues = Object.values(this.props.project);
        const projectKeys = Object.keys(this.props.project);
        return projectKeys.map((key, i) => {
            if (key === "project_name" || key === "description" || key === "tag_name") {
                return <td key={i}>{projectValues[i]}</td>
            }
            //before finished with mapping, adding in buttons cell
            else if (i === projectKeys.length - 1) {
                return <td key={i}>
                    <button onClick={this.handleDelete}>Delete</button>
                    {this.tagsPopup()}
                </td>
            } else {
                return null
            }
        })
    }

    render() {
        //   console.log(this.props.project);
        // console.log(this.state);

        return (
            <tr>
                {this.buildProjectRow()}
            </tr>
        )
    }
}

const mapRStoProps = (reduxStore) => {
    return { tags: reduxStore.tags }
}

export default connect(mapRStoProps)(AdminTableRow);