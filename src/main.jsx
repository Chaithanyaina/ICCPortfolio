import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.js'; // <-- Import GlobalStyles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles /> {/* <-- Add GlobalStyles here */}
    <App />
  </React.StrictMode>
);