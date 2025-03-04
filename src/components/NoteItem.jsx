import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archiveText }) {
    return (
        <div className='note-item'>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.625 2.25H6.375C3.715 2.25 2.25 3.715 2.25 6.375V17.625C2.25 20.285 3.715 21.75 6.375 21.75H12.853C13.955 21.75 14.991 21.321 15.769 20.542L20.542 15.769C21.321 14.99 21.75 13.9551 21.75 12.8521V6.375C21.75 3.715 20.285 2.25 17.625 2.25ZM6.375 20.25C4.535 20.25 3.75 19.465 3.75 17.625V6.375C3.75 4.535 4.535 3.75 6.375 3.75H17.625C19.465 3.75 20.25 4.535 20.25 6.375V12.8521C20.25 13.0751 20.2129 13.29 20.1599 13.5H16.875C15.014 13.5 13.5 15.014 13.5 16.875V20.16C13.29 20.213 13.075 20.25 12.853 20.25H6.375ZM15 19.189V16.875C15 15.841 15.841 15 16.875 15H19.189L15 19.189ZM7.25 9.5C7.25 9.086 7.586 8.75 8 8.75H16C16.414 8.75 16.75 9.086 16.75 9.5C16.75 9.914 16.414 10.25 16 10.25H8C7.586 10.25 7.25 9.914 7.25 9.5ZM12.75 14C12.75 14.414 12.414 14.75 12 14.75H8C7.586 14.75 7.25 14.414 7.25 14C7.25 13.586 7.586 13.25 8 13.25H12C12.414 13.25 12.75 13.586 12.75 14Z"/>
                </svg>
                <h3 className='note-item__title'>{title}</h3>
            </span>
            <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
            <p className='note-item__body'>{body}</p>
            <span className='note-item__action'>
                <button className='note-item__delete' onClick={() => onDelete(id)}>Hapus</button>
                <button className='note-item__archive' onClick={() => onArchive(id)}>{archiveText}</button>
            </span>
        </div>
    )
}

export default NoteItem;