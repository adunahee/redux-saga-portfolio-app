import React, { Component } from 'react';
import {connect} from 'react-redux';
import TagsDropdown from './../AdminPage/TagsDropdown';

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            description: null,
            thumbnail: null,
            website: null,
            github: null,
            date_completed: null,
            tag_id: null,
        }   
    }

    handleChange = (event) => {
        if (event.target.id === '') {
            this.setState({tag_id: event.target.value})
        } else {
            this.setState({ [event.target.id]: event.target.value });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.dispatch({type: "POST_PROJECT", payload: this.state})
        // this.props.dispatch({ type: "POST_PROJECT", payload: 'force error'})
        this.setState({
            name: null,
            description: null,
            thumbnail: null,
            website: null,
            github: null,
            date_completed: null,
            tag_id: null,
        })
    }

    render() {
        // console.log(this.state);
        // console.log(this.props.tags);
        // console.log(this.state.name === null ? 'empty' : this.state.name);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Project Name</label>
                    <input
                        required
                        id='name'
                        type='text'
                        placeholder='eg React Native CRUD App'
                        value={this.state.name === null ? '' : this.state.name}
                        onChange={this.handleChange} />
                        <br />
                    <label htmlFor='description'>Description</label>
                    <textarea
                        required
                        id='description'
                        type='text'
                        placeholder='Write multiple lines here to describe 
                        project like what it does and what you used that was 
                        new to you.'
                        value={this.state.description === null ? '' : this.state.description}
                        onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='thumbnail'>Thumbnail Image URL</label>
                    <input
                        id='thumbnail'
                        type='url'
                        placeholder='www.imagesource.com'
                        value={this.state.thumbnail === null ? '' : this.state.thumbnail}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='website'>Website URL</label>
                    <input
                        id='website'
                        type='url'
                        placeholder='www.heroku.com/winking-brown-eye-5555'
                        value={this.state.website === null ? '' : this.state.website}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='github'>GitHub URL</label>
                    <input
                        id='github'
                        type='url'
                        placeholder='wwww.github.com/profile/projectname'
                        value={this.state.github === null ? '' : this.state.github}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='date_completed'>Date Completed</label>
                    <input
                        id='date_completed'
                        type='date'
                        value={this.state.date_completed === null ? '' : this.state.date_completed}
                        onChange={this.handleChange} />
                    <br />
                    

                    <TagsDropdown tag_id={this.state.tag_id} handleChange={this.handleChange}/>
                    
                    <br />
                        <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

// export default connect()(AdminForm);