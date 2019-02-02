const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM projects;`)
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
    .then( response => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error posting project', error);
        res.sendStatus(500);
    })
})

module.exports = router;