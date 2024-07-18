import React from 'react';
import NavigationBar from './components/NavigationBar';
import NoteList from './components/NoteList';
import {getInitialData, showFormattedDate} from './utils/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            noteData: getInitialData(),
            formattedDate: showFormattedDate(),
            filteredData: getInitialData().filter((data) => !data.archived),
        }

        this.handleArchiveButton = this.handleArchiveButton.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }
    
    handleArchiveButton() {
        let data = this.state.noteData.filter(data => data.archived);
        this.setState({filteredData: data});
    }

    onSearchHandler(search) {
        let data = this.state.noteData.filter(contact =>
            contact.title.toLowerCase().includes(search.toLowerCase())
        );
        this.setState({filteredData: data})
    }

    render() {
        return (
            <div className="App">
                <NavigationBar onArchiveButtonClick={this.handleArchiveButton} onSearch={this.onSearchHandler}/>
                <NoteList notes={this.state.filteredData}/>
            </div>
        );
    }
}

export default App;