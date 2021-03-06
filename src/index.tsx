import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { TransactionProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-17 09:00:00'),
        },
        {
          id: 2,
          title: 'Internet',
          type: 'withdraw',
          category: 'Internet',
          amount: 100,
          createdAt: new Date('2021-02-17 09:00:00'),
        }
      ]
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', { ...data, createdAt: new Date() });
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>
);
