import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './ProjectPage.css';

class ProjectItem extends Component {

    buildCardActions = () => {
        const projectKeys = Object.keys(this.props.project);
        const projectValues = Object.values(this.props.project);

        return projectValues.map((value, index) => {
            if (value === null || typeof value === 'number') {
                return null
            } else if (projectKeys[index] === "website") {
                return <div key={index}>
                    <a href={value} target="_blank" rel="noopener noreferrer">View Website</a>
                </div>
            } else if (projectKeys[index] === 'github') {
                return <div key={index}>
                    <a  href={value} target="_blank" rel="noopener noreferrer">View Repo on GitHub</a>
                </div>
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
        // console.log(Object.values(this.props.project));
        // console.log(Object.keys(this.props.project));
        return (
            <Grid item lg={8} md={10} className='card-grid-item' >
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
                    {/* {this.buildProjectItems()} */}
                    {/* {this.buildGitHubCommitData()} */}
                </Card>
            </Grid>
        )
    }
}

export default ProjectItem;