import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import ArchivePage from '../pages/ArchivePage';
import NoteDetail from '../pages/NoteDetail';
import NotFound from './NotFound';

function NoteApp() {
  return (
    <div className="note-app">
      <header className='note-app__header'>
        <h1>Nano's (Nae Notes) Apps</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default NoteApp;