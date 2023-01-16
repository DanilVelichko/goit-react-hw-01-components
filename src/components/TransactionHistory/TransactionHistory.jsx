import PropTypes from 'prop-types'

 
const TransactionHistory = ({items}) => {
  // const {id, type, amount, currency } = transactions;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes
    .arrayOf(PropTypes
      .shape(PropTypes = {
          currency: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        })),
  
}

console.log(TransactionHistory)
export default TransactionHistory;