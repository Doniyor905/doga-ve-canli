import React from 'react';
import './App.scss';
import i18n from './i18n';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
// import Form from "./components/Form";
import logoIcon from './image/logoIcon.svg';
import { withNamespaces } from 'react-i18next';

function App({ t }) {
  return (
    <div className="root-home">
      <div className="wrapper">
        <div className="App container">
          <Nav />
          <Header />
          <Projects />

          <footer>
            <p className="footer">{t('Footer Text')}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(App);
