const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM tags;`)
    .then(response => {
        res.send(response.rows);
    }).catch(error => {
        console.log(`error in tags GET`, error);
        res.sendStatus(200);
    });
});

// module.exports = router;