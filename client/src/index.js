import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly (no client)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// Render the app using ReactDOM.render instead of createRoot
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// No need for root variable in React 17
