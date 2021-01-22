import React, { Component } from 'react';

class SearchBar extends Component {
    handleSearchNote = (e) => {
        this.props.handleSearchNote(e.target.value);
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='Search...' onChange={this.handleSearchNote}></input>
            </div>
        );
    }
}

export default SearchBar;