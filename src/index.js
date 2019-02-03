import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('UPDATE_PROJECT_TAG', updateTag);
}

function* fetchTags() {
    try {
        const response = yield axios.get('/tags');
        yield put({ type: 'SET_TAGS', payload: response.data })
    }
    catch (error) {
        yield console.log('error fetchingTags', error);
    }
}

function* fetchProjects() {
    try {
        let projects = yield axios.get('/projects');
        yield put({ type: 'SET_PROJECTS', payload: projects.data })
    }
    catch (error) {
        yield console.log('error in fetchProjects', error);
    }
}

function* postProject(action) {
    try {
        yield axios.post('/projects', action.payload);
        yield alert('Your project has successfully been added to the database.')
        yield put({ type: 'FETCH_PROJECTS' });
    }
    catch (error) {
        yield console.log('error in postProject saga', error);
        yield alert('Unable to add your project to the database at this time.')
    }
}

function* deleteProject(action) {
    try {
        yield axios.delete(`/projects/${action.payload}`);
        yield put({ type: 'FETCH_PROJECTS' });
        yield alert('Project deleted.');
    }
    catch (error) {
        yield alert('Unable to delete the project at this time.');
        yield console.log('deleteProject error:', error);

    }
}

function* updateTag(action){
    try{
        yield axios.put(`/projects/${action.payload.tag_id}/${action.payload.project_id}`);
        yield alert('Tag successfully updated.')
        yield put({type: 'FETCH_PROJECTS'})
    }
    catch(error){
        yield console.log('error in updateTag saga', error);
        yield alert('Unable to update project tag at this time.')
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
