const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/:project_id', (req, res) => {
    let queryText = `SELECT github_repo_name FROM projects WHERE id = $1;`;
    pool.query(queryText, [req.params.project_id])
        .then( myDBResponse => {
            const repo_name = myDBResponse.rows[0].github_repo_name;
            axios.get(`https://api.github.com/repos/adunahee/${repo_name}/commits`)
            .then( response => {
                // console.log('repo commits', response.data);
                let githubCommitData = response.data;
                const commitStats = {};
                commitStats.total = githubCommitData.length;
                commitStats.adunaheeCommits = githubCommitData.reduce( (acc, commit) => {
                   if (commit.commit.author.name === "Anthony D"){
                       return acc + 1;
                   } else {
                       return acc;
                   }
                }, 0)
                res.send(commitStats);
            }).catch(error => {
                console.log('error getting repo commits', error);
                res.sendStatus(500);
            })
        }).catch(error => {
            console.log('error getting github repo name.', error);
            res.sendStatus(500);
        });
});

module.exports = router;
