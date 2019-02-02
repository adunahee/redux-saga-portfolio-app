import React, { Component } from 'react'
import { connect } from 'react-redux';

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
        }   
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: "POST_PROJECT", payload: this.state})
        this.setState({
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Project Name</label>
                    <input
                        required
                        id='name'
                        type='text'
                        placeholder='eg React Native CRUD App'
                        value={this.state.name}
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
                        value={this.state.description} 
                        onChange={this.handleChange}/>
                    <br />
                    <label htmlFor='thumbnail'>Thumbnail Image URL</label>
                    <input
                        id='thumbnail'
                        type='url'
                        placeholder='www.imagesource.com'
                        value={this.state.thumbnail}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='website'>Website URL</label>
                    <input
                        id='website'
                        type='url'
                        placeholder='www.heroku.com/winking-brown-eye-5555'
                        value={this.state.website}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='github'>GitHub URL</label>
                    <input
                        id='github'
                        type='url'
                        placeholder='wwww.github.com/profile/projectname'
                        value={this.state.github}
                        onChange={this.handleChange} />
                    <br />
                    <label htmlFor='date_completed'>Date Completed</label>
                    <input
                        id='date_completed'
                        type='date'
                        placeholder='eg React Native CRUD App'
                        value={this.state.date_completed}
                        onChange={this.handleChange} />
                        <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(AdminForm)