import React from 'react';
import ReactDOM from 'react-dom/client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <QueryClientProvider client={queryClient}>
        <Notifications position='bottom-center' />
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
);
