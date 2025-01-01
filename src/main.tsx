import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { BlogProvider } from './context/BlogContext';
import { initializeTracking } from './utils/tracking';
import { initFacebookPixel } from './utils/facebook-pixel';
import { initConsentMode } from './utils/consent/init';
import ErrorBoundary from './utils/error-boundary';
import './index.css';

// Initialize consent management first
initConsentMode();

// Initialize tracking with proper consent checks
initializeTracking();
initFacebookPixel('XXXXXXXXXX');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <BlogProvider>
          <App />
        </BlogProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);