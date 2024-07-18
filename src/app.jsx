import React from 'react';
import NavigationBar from './components/NavigationBar';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';
import NoteInput from './components/NoteInput';
import { getInitialData, showFormattedDate } from './utils/index';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formattedDate: showFormattedDate(),
            notes: getInitialData().filter((data) => !data.archived),
            archivedNotes: getInitialData().filter((data) => data.archived),
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }

    onSearchHandler(search) {
        let data = getInitialData().filter(contact =>
            contact.title.toLowerCase().includes(search.toLowerCase())
        );
        this.setState({ notes: data })
    }

    handleArchiveButton() {
        document.getElementById('note-modal').style.display = 'flex';
    }

    handleAddButton() {
        document.getElementById('note-input').style.display = 'flex';
    }

    onModalCloseHandler() {
        document.getElementById('note-modal').style.display = 'none';
    }

    onAddNoteHandler({ title, body }) {
        this.setState((initialState) => {
            return {
                notes: [
                    ...initialState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ],
                archivedNotes: [
                    ...initialState.archivedNotes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onDeleteNoteHandler(id) {
        let activeNote = this.state.notes.filter(data => data.id !== id && !data.archived);
        let archivedNote = this.state.archivedNotes.filter(data => data.id !== id && data.archived);
        this.setState({ notes: activeNote });
        this.setState({ archivedNotes: archivedNote });
    }

    onArchiveNoteHandler(id) {
        let activeNote = this.state.notes.find(data => data.id === id);
        let archivedNote = this.state.archivedNotes.find(data => data.id === id);
        if (activeNote && !activeNote.archived) {
            activeNote.archived = true;
            this.setState({ notes: this.state.notes.filter(data => data.id !== id) });
            this.setState({ archivedNotes: [...this.state.archivedNotes, activeNote] });
        } else if (archivedNote && archivedNote.archived) {
            archivedNote.archived = false;
            this.setState({ archivedNotes: this.state.archivedNotes.filter(data => data.id !== id) });
            this.setState({ notes: [...this.state.notes, archivedNote] });
        }
    }

    render() {
        return (
            <div className="App">
                <NavigationBar onSearch={this.onSearchHandler} onArchiveButtonClick={this.handleArchiveButton} onAddButtonClick={this.handleAddButton} />
                <NoteInput addNote={this.onAddNoteHandler} />
                <NoteList notes={this.state.notes} onArchiveButtonClick={this.handleArchiveButton} onAddButtonClick={this.handleAddButton} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} archiveText={'Arsip Catatan'} />
                <NoteModal notes={this.state.archivedNotes} onClose={this.onModalCloseHandler} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} archiveText={'Keluarkan dari Arsip'} />
            </div>
        );
    }
}

export default App;