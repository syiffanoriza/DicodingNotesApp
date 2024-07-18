import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, onArchiveButtonClick, onAddButtonClick, archiveText }) {
    return (
        <main>
            <h2>Catatan</h2>
            <div className="mobile-only">
                <button type="button" onClick={onAddButtonClick}>Tambah Catatan</button>
                <button type="button" onClick={onArchiveButtonClick}>Buka Arsip Catatan</button>
            </div>
            {notes.length > 0 ? (
                <div className='note-list'>
                    {
                        notes.map((note) => (
                            <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} archiveText={archiveText} {...note} />
                        ))
                    }
                </div>
            ) : (
                <p className='note-list__placeholder'>Tidak ada catatan.</p>
            )}
        </main>
    )
}

export default NoteList;