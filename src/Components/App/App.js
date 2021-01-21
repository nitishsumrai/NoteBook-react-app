import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import SearchBar from '../SearchBar/SearchBar'
import NoteList from '../NoteList/NoteList'
class App extends Component {
  render() {
    return (
      <div>
        <NoteForm />
        <SearchBar />
        <NoteList />
      </div>
    );
  }
}

export default App;