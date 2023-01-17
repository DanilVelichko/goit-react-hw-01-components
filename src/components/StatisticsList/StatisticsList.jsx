import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types'
import css from "./StatisticsList.module.css";

const StatisticsList = ({ title,  stats }) => {
  
  return (
    < section className={css.statistics} >
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
       
        {stats.map(item => {
          return (
            <Statistics
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />)
        }
        )}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.bool,

  }))
}
export default StatisticsList; 