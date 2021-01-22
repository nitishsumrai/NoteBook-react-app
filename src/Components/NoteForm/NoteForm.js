import React, { Component } from 'react';
import './NoteForm.css'
class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.titleInputRef = React.createRef();
        this.descInputRef = React.createRef();
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        var isNodeAdded = this.props.handleAddingNote({ title: this.titleInputRef.current.value, desc: this.descInputRef.current.value })
        if (isNodeAdded) {
            this.titleInputRef.current.value = '';
            this.descInputRef.current.value = '';
        } else {
            alert('Entered Title already Exits');
        }

    }
    render() {
        const { isEditing } = this.props;
        console.log((isEditing ? isEditing.title : ''))
        return (
            <div>

                <form className="form" onSubmit={this.handleFormSubmit}>
                    <input type='text' placeholder='Title' ref={this.titleInputRef} defaultValue='asd' required></input>
                    {isEditing ?
                        <input type='textarea' className="desc" placeholder='Description' ref={this.descInputRef} value={isEditing.desc}></input>
                        :
                        <input type='textarea' className="desc" placeholder='Description' ref={this.descInputRef}></input>

                    }
                    <button type='submit' >Submit</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;