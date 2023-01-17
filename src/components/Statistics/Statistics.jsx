import PropTypes from 'prop-types'
import css from "./Statistics.module.css";
 
const Statistics = ({ id, label, percentage }) => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); //generate random color
  return (     
          <li className={css.item} id={id} style={{ backgroundColor: randomColor }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
          </li>
   );
};

Statistics.propTypes = {
 
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string,
}
export default Statistics;