import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import profileTabIcon from './assests/profile_img.webp';

const faviconLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
faviconLinks.forEach((link) => {
  link.setAttribute('href', profileTabIcon);
  if (link.getAttribute('rel') !== 'apple-touch-icon') {
    link.setAttribute('type', 'image/webp');
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
