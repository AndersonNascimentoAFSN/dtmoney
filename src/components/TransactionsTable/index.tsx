import { useTransaction } from "../../hooks/useTransaction";
import { Container } from "./styles";
import { TransactionBody } from "./TransactionBody";
import { TransactionHead } from "./TransactionHead";

export default function TransitionsTable() {
  const transactions = useTransaction();

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
