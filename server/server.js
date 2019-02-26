const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const tagsRouter = require('./routes/tags.router');
const projectsRouter = require('./routes/projects.router');
const githubRouter = require('./routes/github.api.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// app.use('/tags', tagsRouter);
app.use('/projects', projectsRouter);
// take out for the time being
// app.use('/api/github', githubRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});