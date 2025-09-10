import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import { App } from './layouts/App';
import { AppWrapper } from './layouts/AppWrapper';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
