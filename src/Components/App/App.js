import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import SearchBar from '../SearchBar/SearchBar'
import NoteList from '../NoteList/NoteList'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: [],
      isEditing: null
    }
  }

  handleAddingNote = (data) => {
    const { noteList } = this.state;

    var found = false;
    // search if Note title is already present or not
    for (var i = 0; i < noteList.length; i++) {
      if (noteList[i].title == data.title) {
        found = true;
        break;
      }
    }
    // note already exists
    if (found) {
      return false;
    }
    // add new note
    this.setState({
      noteList: [...noteList, data]
    })
    return true;
  }
  handleDeleteNode = (index) => {
    const { noteList } = this.state;
    noteList.splice(index, 1);
    this.setState({
      noteList: noteList
    })
  }
  handleEditNote = (index) => {
    const { noteList } = this.state;
    this.setState({
      noteList: noteList,
      isEditing: noteList.splice(index, 1)[0]
    })
  }
  render() {
    const { noteList, isEditing } = this.state;
    console.log('rendering :', 'noteList', noteList, 'isEditing:', isEditing);
    return (
      <div className='App'>
        <NoteForm handleAddingNote={this.handleAddingNote} isEditing={isEditing} />
        <SearchBar />
        <NoteList noteList={noteList} handleDeleteNode={this.handleDeleteNode} handleEditNote={this.handleEditNote} />
      </div>
    );
  }
}
export default App;