import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProjectItem from './../ProjectPage/ProjectItem';

class ProjectPage extends Component {

    buildProjectCards = () => {
        return this.props.projects.map( (project, index) => {
            return <ProjectItem key={index} project={project} />
        })
    }

    render() {
        // console.log(this.props.projects);
        
        return (
            <div>
                <h2>Projects</h2>
                {this.props.projects.length > 1 &&

                    this.buildProjectCards()
                }
            </div>
        )
    }
}

const mapRStoProps = (reduxStore) => {
    return { projects: reduxStore.projects }
}

export default connect(mapRStoProps)(ProjectPage);
