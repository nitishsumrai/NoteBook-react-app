import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faSchool } from '@fortawesome/free-solid-svg-icons'
import './Note.css';
class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }

    }
    handleExpansionOfDescription = (e) => {
        this.setState({
            expand: this.state.expand ? false : true,
        })
    }

    handleDeleteNode = () => {
        // console.log(this.props.dataKey);
        this.props.handleDeleteNode(this.props.dataKey);
    }
    handleEditNote = () => {
        this.props.handleEditNote(this.props.dataKey);
    }
    render() {
        const { expand } = this.state;
        const { note } = this.props;
        return (
            <div className='note-item'>
                <FontAwesomeIcon icon={faSchool} />
                <span className='note-info' onClick={this.handleExpansionOfDescription}>
                    <h4>{note.title}</h4>
                    {(expand ?
                        <div style={{ overflow: 'visible' }}>
                            <p>{note.desc}</p>
                        </div> :
                        <div style={{ overflow: 'hidden' }}>
                            <p>{note.desc}</p>
                        </div>
                    )}

                </span>
                <span>
                    <FontAwesomeIcon icon={faEdit} onClick={this.handleEditNote} />
                    <br></br>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleDeleteNode} />
                </span>
            </div>
        );
    }
}

export default Note;