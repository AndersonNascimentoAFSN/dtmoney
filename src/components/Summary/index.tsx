import { useTransactions } from "../../hooks/useTransactions";
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';
import totalImg from '../../assets/images/total.svg';
import { Container } from "./styles";

export default function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // }, 0);

  // const totalDeposits = new Intl.NumberFormat('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL'
  // }).format(transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // }, 0));

  const summary = transactions.reduce((acc, transaction) => {
    switch (transaction.type) {
      case 'deposit':
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
        break;
      case 'withdraw':
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
        break;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  function formatCurrencyNumber(number: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(number);
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatCurrencyNumber(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-{formatCurrencyNumber(summary.withdraws)}</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrencyNumber(summary.total)}</strong>
      </div>
    </Container>
  )
}
