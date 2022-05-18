import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// initialized i18next instance
import i18next from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 
import en from './i18n/en.json';
import es from './i18n/es.json';

// interpolaration nos ayuda a protegernos de ataques XSS, al ser enviados por medio de imputs
i18next.use(initReactI18next)
.init({
  lng: 'es',
  interpolation:{
    escapeValue: false,
  },
  resources: {
    en:{
      translation: en
    },
    es:{
      translation: es
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <initReactI18next i18n={i18next}>
      <App />
    </initReactI18next>
  </React.StrictMode>
);
