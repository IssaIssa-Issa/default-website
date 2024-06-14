import React from 'react';
import ReactDOM from 'react-dom/client';
import 'boxicons';
import './index.css';
import App from './App';
import NavBar from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <NavBar />
        <App />
    </div>
);
