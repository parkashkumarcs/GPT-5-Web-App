import React from 'react';
import ReactDOM from 'react-dom/client'; 

//Following code for importing App  file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);