import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import SearchBar from '../SearchBar/SearchBar'
import NoteList from '../NoteList/NoteList'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: []
    }
  }

  handleAddingNote = (data) => {
    const { noteList } = this.state;

    var found = false;
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
  handleDeleteNode = (key) => {
    const { noteList } = this.state;
    this.setState({
      noteList: noteList.splice(key, 1)
    })
  }
  render() {
    const { noteList } = this.state;
    console.log(noteList)

    return (
      <div className='App'>
        <NoteForm handleAddingNote={this.handleAddingNote} />
        <SearchBar />
        <NoteList noteList={noteList} handleDeleteNode={this.handleDeleteNode} />
      </div>
    );
  }
}

export default App;