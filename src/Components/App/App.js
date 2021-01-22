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
  componentDidMount = () => {
    let noteMap = this.getJSONObjectOfNote();
    var result = Object.keys(noteMap).map((key) => { return { title: key, desc: noteMap[key] } });
    this.setState({
      noteList: result,
      // isEditing: null
    })
  }
  getJSONObjectOfNote = () => {
    let noteMap = localStorage.getItem('note');
    if (!noteMap) {
      localStorage.setItem('note', '{}');
      noteMap = localStorage.getItem('note');
    }
    noteMap = JSON.parse(noteMap);
    return noteMap;
  }
  handleAddingNote = (data) => {
    let noteMap = this.getJSONObjectOfNote()
    if (noteMap[data.title]) {
      return false;
    } else {
      noteMap[data.title] = data.desc;
      var result = Object.keys(noteMap).map((key) => { return { title: key, desc: noteMap[key] } });
      this.setState({
        noteList: result,
        isEditing: null
      })
      localStorage.setItem('note', JSON.stringify(noteMap));
      return true;
    }
  }
  handleDeleteNode = (index) => {
    const { noteList } = this.state;
    this.deleteNoteFromLocalStorage(noteList[index].title)
    noteList.splice(index, 1);
    this.setState({
      noteList: noteList
    })
  }
  handleEditNote = (index) => {
    const { noteList } = this.state;
    // remove that note and pass it to NoteForm as Prop
    const noteToUpdate = noteList.splice(index, 1)[0];
    this.deleteNoteFromLocalStorage(noteToUpdate.title)
    this.setState({
      noteList: noteList,
      isEditing: noteToUpdate
    })
  }
  // delete Note of passed title
  deleteNoteFromLocalStorage = (title) => {
    let noteMap = this.getJSONObjectOfNote();
    delete noteMap[title];
    localStorage.setItem('note', JSON.stringify(noteMap));
  }
  handleSearchNote = (value) => {
    console.log(value)
    let noteMap = this.getJSONObjectOfNote();
    let result = Object.keys(noteMap).map((key) => { return { title: key, desc: noteMap[key] } });
    result = result.filter((note) => { return note.title.includes(value) })
    this.setState({
      noteList: result
    })
  }
  render() {
    const { noteList, isEditing } = this.state;
    console.log('rendering :', 'noteList', noteList, 'isEditing:', isEditing);
    return (
      <div className='App'>
        <NoteForm handleAddingNote={this.handleAddingNote} isEditing={isEditing} />
        <SearchBar handleSearchNote={this.handleSearchNote} />
        <NoteList noteList={noteList} handleDeleteNode={this.handleDeleteNode} handleEditNote={this.handleEditNote} />
      </div>
    );
  }
}
export default App;