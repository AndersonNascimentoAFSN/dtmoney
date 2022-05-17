import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
  id: number;
  title: string,
  amount: number,
  type: 'deposit' | 'withdraw',
  category: string,
  createdAt: string,
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}