const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

//this route gets repo name, then gets commit data from github, then after some counting, 
//sends the updates project tables, returning update for client
router.get('/commit-data', (req, res) => {
    let queryText = `SELECT github_repo_name, id FROM projects;`;
    pool.query(queryText)
        .then(myDBResponse => {
            for (project of myDBResponse.rows) {
                console.log(project);
                console.log(project.id);

                axios.get(`https://api.github.com/repos/adunahee/${project.github_repo_name}/commits`)
                    .then(response => {
                        // console.log('repo commits', response.data);
                        let githubCommitData = response.data;
                        const commitStats = {};
                        commitStats.total = githubCommitData.length;
                        commitStats.adunaheeCommits = githubCommitData.reduce((acc, commit) => {
                            if (commit.commit.author.name === "Anthony D") {
                                return acc + 1;
                            } else {
                                return acc;
                            }
                        }, 0);
                        let secondQueryText = `UPDATE projects 
                                        SET total_commits = $1, personal_commits = $2 
                                        WHERE id = $3;`;
                        pool.query(secondQueryText, [commitStats.total,
                        commitStats.adunaheeCommits, project.id])
                            .then(secondDBResponse => {
                                console.log(`Project ${project.id} succesfully updated.`);
                                
                            }).catch(error =>
                                console.log('Error posting commit data', error));
                    }).catch(error => {
                        console.log('error getting repo commits', error);
                        res.sendStatus(500);
                    })
            }
            res.sendStatus(200);
        }).catch(error => {
            console.log('error getting github repo name.', error);
            res.sendStatus(500);
        });
});

// module.exports = router;
