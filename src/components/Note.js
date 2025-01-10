import React from 'react';
import './Note.css';

function NoteComponent({texto}){
    return(
        <div className="note">
            {texto}
        </div>
    )
};

export default NoteComponent;


