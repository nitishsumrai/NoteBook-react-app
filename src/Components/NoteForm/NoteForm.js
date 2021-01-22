import React, { Component } from 'react';
import './NoteForm.css'
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        var isNodeAdded = this.props.handleAddingNote({ title: this.state.title, desc: this.state.desc })
        if (isNodeAdded) {
            this.setState({
                title: '',
                desc: ''
            });
        } else {
            alert('Entered Title already Exits');
        }
    }
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleDescriptionChange = (e) => {
        this.setState({
            desc: e.target.value
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isEditing == null && this.props.isEditing != null) {
            this.updateAndNotify();
        }
    }
    updateAndNotify = () => {
        console.log('prop.changes', this.state)
        this.setState({
            title: this.props.isEditing.title,
            desc: this.props.isEditing.desc
        }, () => {
            console.log(this.state)
        })
    }
    render() {
        const { isEditing } = this.props;
        // console.log((isEditing ? isEditing.title : ''))
        return (
            <div>
                <form className="form" onSubmit={this.handleFormSubmit}>
                    <input type='text' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title} required></input>
                    <input type='textarea' className="desc" placeholder='Description' onChange={this.handleDescriptionChange} value={this.state.desc}></input>
                    <button type='submit' >Submit</button>
                </form>
            </div>
        );

    }
}


export default NoteForm;