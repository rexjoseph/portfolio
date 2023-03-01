import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import "./index.css"
import './fonts/MarketSans-Regular.ttf';
import './fonts/MarketSans-Bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter basename='/portfolio'>
    <App />
   </BrowserRouter>
  </React.StrictMode>
);