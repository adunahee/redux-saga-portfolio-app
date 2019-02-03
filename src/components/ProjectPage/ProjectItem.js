import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProjectItem extends Component {

    buildProjectItems = () => {
        //["id", "name", "description", "thumbnail", "website", "github", "date_completed", "tag_id"]
        const projectKeys = Object.keys(this.props.project);
        const projectValues = Object.values(this.props.project);

        return projectValues.map( (value, index) => {
            if(value === null || typeof value === 'number') {
                return null
            } else if (projectKeys[index] === "thumbnail" ) {
                return <img key={index} src={value} alt={`screenshot of ${this.props.project.name}`} height='300' width='300'/>
            } else if (projectKeys[index] === "website" || projectKeys[index] === 'github'){
                return <div key={index}>
                    <a href={value} target="_blank" rel="noopener noreferrer">View {projectKeys[index]}</a> 
                    </div>
            }
            else {
                return <p key={index}> {projectKeys[index]}: {value}</p>
            }
        })
    }

    buildGitHubCommitData = () => {
        return (
            <ul>
                <li>
                    My commits: {this.props.project.personal_commits}
                </li>
                <li>
                    Total commits: {this.props.project.total_commits}
                </li>
            </ul>
        )
    }

    render() {
        // console.log(Object.values(this.props.project));
        // console.log(Object.keys(this.props.project));
        return (
            <div>
                {this.buildProjectItems()}
                {this.buildGitHubCommitData()}
            </div>
        )
    }
}

export default connect()(ProjectItem);