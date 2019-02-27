import React, { Component } from 'react';

import {
    Card, CardHeader, CardMedia, CardContent,
    CardActions, Typography, IconButton, Grid, Collapse
} from '@material-ui/core';

import { OpenInNew, ExpandMore } from '@material-ui/icons';

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false }
    }

    buildCardActions = () => {
        const projectKeys = Object.keys(this.props.project);
        const projectValues = Object.values(this.props.project);
        //maps over project values creating icon buttons for websites and github if there is a link present
        return projectValues.map((value, index) => {
            let icon;
            if (value === null || typeof value === 'number') {
                return null
            } else if (projectKeys[index] === "website") {
                icon = <OpenInNew />
            } else if (projectKeys[index] === 'github') {
                icon = <img src='/images/github-logo.svg' style={{ height: '24px' }} alt='GitHub Icon'/>
            }
            if (icon === undefined) {
                return null
            } else {
                return (
                    <Grid item
                        key={index}>
                        <IconButton href={value}
                            rel='noopener noreferrer'
                            target='blank'
                        >
                            {icon}
                        </IconButton>
                    </Grid>
                )
            }
        })
    }

    handleExpand = () => {
        this.setState({ expanded: !this.state.expanded });

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
        const expansionText = { color: '#F4E8A4' };
        return (
            <Card className='project-card'>
                <CardHeader
                    title={this.props.project.project_name}
                    subheader={`Completed ${this.props.project.date_completed.substr(0, 10)}`}
                />
                {this.props.project.thumbnail === null ? null :
                    <CardMedia
                        component="img"
                        alt={`Thumbnail of ${this.props.project.project_name}`}
                        src={this.props.project.thumbnail}
                        title={`Thumbnail of ${this.props.project.project_name}`}
                    />
                }
                <CardActions className='project-card-actions'>
                    <Grid container
                        direction='row'
                        justify='space-between'
                    >
                        {this.buildCardActions()}
                        <Grid item>
                            <IconButton
                                style={this.state.expanded ? { transform: 'rotate(180deg)' } : {}}
                                onClick={this.handleExpand}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMore />
                            </IconButton>
                        </Grid>
                    </Grid>
                </CardActions>
                <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                    <CardContent style={{ backgroundColor: '#4f4f4a' }}>
                        <Typography component='p' style={expansionText}>
                            {this.props.project.description}
                        </Typography>
                        {this.props.project.tag_name === null ? null :
                            <Typography style={expansionText}>
                                {`#${this.props.project.tag_name}`}
                            </Typography>}
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default ProjectItem;