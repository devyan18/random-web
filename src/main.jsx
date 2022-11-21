import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './assets/puppertino/css/newfull.css';
import './index.css';
import UserProvider from './providers/UserProvider';

const queryClient = new QueryClient();

const element = document.getElementById('root');

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserProvider>
          <Router />
          <ReactQueryDevtools initialIsOpen={true} />
        </UserProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
