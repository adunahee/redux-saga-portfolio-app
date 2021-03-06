import React, { Component } from 'react'
import { connect } from 'react-redux';

import ProjectItem from './../ProjectPage/ProjectItem';

import Grid from '@material-ui/core/Grid';

class ProjectPage extends Component {

    buildProjectCards = () => {
        return this.props.projects.map((project, index) => {
            return (
                <Grid item
                    key={index}
                    sm={7}
                    md={5}>
                    <ProjectItem project={project} />
                </Grid>
            )
        })
    }

    render() {

        return (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={24}
                >
                    {this.props.projects.length > 1 &&
                        this.buildProjectCards()
                    }
                </Grid>
        )
    }
}

//disconnecting app from rs and db, and hardcoding project

const mapRStoProps = (reduxStore) => {
    return { projects: reduxStore.projects }
}

export default connect(mapRStoProps)(ProjectPage);
