import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { RouterApp } from './router/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <RouterApp />
    </HashRouter>
  </StrictMode>
);
