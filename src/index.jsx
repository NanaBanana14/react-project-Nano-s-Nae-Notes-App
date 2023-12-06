import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NoteApp from './component/NoteApp';
 
 
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <NoteApp />
 </BrowserRouter>
);