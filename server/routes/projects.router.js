const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    //replaces tag_id with tag name using join, excludes rows that would be tags with no projects
    pool.query(`SELECT projects.id, projects.name as project_name, description, 
                thumbnail, website, github, date_completed, tags.name as tag_name
                FROM projects
                FULL OUTER JOIN tags ON projects.tag_id = tags.id
                WHERE projects.id IS NOT NULL;`)
        .then(response => {
            res.send(response.rows);
        }).catch(error => {
            console.log(`error in projects GET`, error);
            res.sendStatus(200);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    console.log(Object.values(req.body));

    const queryText = `INSERT INTO projects 
    (name, description, thumbnail, website, github, date_completed, tag_id)
                        VALUES ($1, $2, $3, $4, $5, $6, $7);`
    pool.query(queryText, Object.values(req.body))
        .then(response => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('error posting project', error);
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM projects WHERE id = $1;`;
    pool.query(queryText, [req.params.id])
        .then(response => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting project', error);

            res.sendStatus(500);
        });
})

module.exports = router;