import React, { Component } from 'react';

import {
    Card, CardHeader, CardMedia, CardContent,
    CardActions, Typography, IconButton
    } from '@material-ui/core';

import { OpenInNew } from '@material-ui/icons';

class ProjectItem extends Component {

    buildCardActions = () => {
        const projectKeys = Object.keys(this.props.project);
        const projectValues = Object.values(this.props.project);

        return projectValues.map((value, index) => {
            if (value === null || typeof value === 'number') {
                return null
            } else if (projectKeys[index] === "website") {
                return (
                    <IconButton href={value}
                        rel='noopener noreferrer'
                        target='blank'
                        key={index}>
                        <OpenInNew />
                    </IconButton>
                )

            } else if (projectKeys[index] === 'github') {
                return (
                    <IconButton href={value}
                        target='blank'
                        rel='noopener noreferrer'
                        key={index}
                        style={{ padding: '5px' }}>
                        <img src='/images/github-logo.svg' style={{ height: '25px' }} />
                    </IconButton>
                )
            }
            else { return null }
        })
    }

    //git API not utilized at this time
    // buildGitHubCommitData = () => {
    //     return (
    //         <ul>
    //             <li>
    //                 My commits: {this.props.project.personal_commits}
    //             </li>
    //             <li>
    //                 Total commits: {this.props.project.total_commits}
    //             </li>
    //         </ul>
    //     )
    // }

    render() {
        const link = { textDecoration: 'none' }
        return (
            <Card className='project-card'>
                <CardHeader
                    title={this.props.project.project_name}
                    subheader={this.props.project.date_completed.substr(0, 10)}
                />
                {this.props.project.thumbnail === null ? null :
                    <CardMedia
                        component="img"
                        alt={`Thumbnail of ${this.props.project.project_name}`}
                        src={this.props.project.thumbnail}
                        title={`Thumbnail of ${this.props.project.project_name}`}
                    />
                }
                <CardContent>
                    <Typography component='p'>
                        {this.props.project.description}
                    </Typography>
                    {this.props.project.tag_name === null ? null :
                        <Typography>
                            {`#${this.props.project.tag_name}`}
                        </Typography>}
                </CardContent>
                <CardActions className='project-card-actions'>
                    {this.buildCardActions()}
                </CardActions>
            </Card>
        )
    }
}

export default ProjectItem;