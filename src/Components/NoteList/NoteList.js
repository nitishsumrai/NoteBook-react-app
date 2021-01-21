import React, { Component } from 'react';
import Note from '../Note/Note'
class NoteList extends Component {
    render() {
        const { noteList, handleDeleteNode } = this.props;
        let NoteList = [];
        noteList.forEach((e, i) => {
            console.log(e);
            NoteList.push(<Note note={e} key={i} handleDeleteNode={handleDeleteNode} dataKey={i} />)
        })
        return (
            <div>
                {NoteList}
            </div>
        );
    }
}

export default NoteList;
