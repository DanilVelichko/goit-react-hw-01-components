import PropTypes from 'prop-types'

 
const Statistics = ({ id, label, percentage }) => {
  return (     
          <li class="item" id={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
   );
};

Statistics.propTypes = {
 
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}
export default Statistics;