import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import HeadProvider from './providers/HeadProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HeadProvider>
            <App />
        </HeadProvider>
    </React.StrictMode>,
);
