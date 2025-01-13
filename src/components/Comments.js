import React from 'react';
import './Comment.css'

function Comment({texto}){
    return(
        <div className="comment">
            {texto}
        </div>
    )

};
export default Comment;