import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';
import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: '15/05/2022',
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: -1100,
          type: 'withdraw',
          category: 'Casa',
          createdAt: '20/01/2022',
        }
      ]
    });
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
