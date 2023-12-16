import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import ArchivePage from '../pages/ArchivePage';
import NoteDetail from '../pages/NoteDetail';
import NotFound from './NotFound';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';
import { ThemeProvider } from '../contexts/ThemeContext';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => this.toggleTheme(),
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => ({
      authedUser: data,
    }));
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => ({
      authedUser: data,
      initializing: false,
    }), () => {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    });
  }

  onLogout() {
    this.setState(() => ({
      authedUser: null,
    }));
    putAccessToken('');
  }

  toggleTheme() {
    this.setState((prevState) => {
      const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return {
        theme: newTheme,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <div className={`note-app ${this.state.theme}`}>
          <header className='note-app__header'>
            <h1>Nano's (Nae Notes) Apps</h1>
          </header>
          <main>
            <Routes>
              <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <ThemeProvider value={this.state}>
        <div className={`note-app ${this.state.theme}`}>
          <header className='note-app__header'>
            <h1>Nano's (Nae Notes) Apps</h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/add' element={<AddPage />} />
              <Route path='/archive' element={<ArchivePage />} />
              <Route path='/note/:id' element={<NoteDetail />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

export default NoteApp;
