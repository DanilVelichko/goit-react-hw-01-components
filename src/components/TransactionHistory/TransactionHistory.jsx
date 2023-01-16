import PropTypes from 'prop-types'
import css from "./TransactionHistory.module.css";
 
const TransactionHistory = ({items}) => {

  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.tr}>
          <th className={css.columns}>Type</th>
          <th className={css.columns}>Amount</th>
          <th className={css.columns}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.o}>
        {items.map(item => {
          return (
            <tr key={item.id} >
              <td className={css.type}>{(item.type).charAt(0).toUpperCase()+(item.type).slice(1)}</td>
              <td className={css.data}>{item.amount}</td>
              <td className={css.data}>{item.currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
  
}

export default TransactionHistory;