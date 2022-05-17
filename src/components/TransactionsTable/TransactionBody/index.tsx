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
        <td>
          {new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
          ).format(props.transaction.amount)}
        </td>
        <td>{props.transaction.type}</td>
        <td>
          {new Intl.DateTimeFormat('pt-BR')
            .format(new Date(props.transaction.createdAt))}
        </td>
      </tr>
    </tbody >
  )
}
