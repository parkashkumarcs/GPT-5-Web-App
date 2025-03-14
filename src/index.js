import React from 'react';
import ReactDOM from 'react-dom/client'; 

// following are main css style file for App and index that I created

import './App.css';
import './index.css'

//Following code for importing App  file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);