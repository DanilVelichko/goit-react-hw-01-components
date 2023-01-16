import PropTypes from 'prop-types'

 
const Statistics = ({ id, label, percentage }) => {
  return (     
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
   );
};

Statistics.propTypes = {
 
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}
export default Statistics;