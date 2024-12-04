import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dogs from './page/Dogs';
import Doga from './page/Doga';
import Cig from './page/Cig';
import Deprem from './page/Deprem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/doga" element={<Doga />} />
        <Route path="/cig" element={<Cig />} />
        <Route path="/deprem" element={<Deprem />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
