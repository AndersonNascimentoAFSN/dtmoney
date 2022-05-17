interface TransactionBodyProps {
  transaction: {
    id: number,
    amount: number,
    title: string,
    type: string,
    createdAt: string
  }
}

export function TransactionBody(props: TransactionBodyProps) {
  return (
    <tbody>
      <tr
        className={props.transaction.type}
      >
        <td>{props.transaction.title}</td>
        <td>{`R$ ${props.transaction.amount}`}</td>
        <td>{props.transaction.type}</td>
        <td>{props.transaction.createdAt}</td>
      </tr>
    </tbody >
  )
}
