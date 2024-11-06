import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Pages from "./pages"
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/:type' element={<Pages />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
