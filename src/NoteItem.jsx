import React from 'react';
import NoteItemBody from './NoteItemBody';
 
function NoteItem({ title, body, createdAt}) {
 return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} createdAt={createdAt} />
   </div>
 );
}
 
export default NoteItem;