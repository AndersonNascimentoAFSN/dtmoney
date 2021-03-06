import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";
import closeImg from '../../assets/images/close.svg';
import incomeImg from '../../assets/images/income.svg';
import outcomeImg from '../../assets/images/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category
    });

    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
        />

        <input
          name="value"
          value={amount}
          onChange={(event) => setAmount(+event.target.value)}
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          // className={type === 'deposit' ? 'active' : ''}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
