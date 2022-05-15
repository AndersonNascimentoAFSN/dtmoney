import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Container } from "./styles";
import { TransactionBody } from "./TransactionBody";
import { TransactionHead } from "./TransactionHead";

interface transactionsResponse {
    id: number;
    title: string,
    amount: number,
    type: 'deposit' | 'withdraw',
    category: string,
    createdAt: string,
}

export default function TransitionsTable() {
    const [transactions, setTransactions] = useState<transactionsResponse[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then((response) => setTransactions(response.data));
    }, []);

    return (
        <Container>
            <table>
                <TransactionHead />
                {
                    transactions && transactions.map((transaction) => (
                        <TransactionBody
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))
                }
            </table>
        </Container>
    )
}
