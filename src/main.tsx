import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';

// Import fonts (standard Vite way if installed via npm, or manual import in SCSS)
// Since @fontsource packages are in package.json, we import them here.
import '@fontsource/orbitron';
import '@fontsource/montserrat-alternates';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
