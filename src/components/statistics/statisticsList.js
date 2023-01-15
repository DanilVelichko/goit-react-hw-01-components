import Statistics from './statistics';
import PropTypes from 'prop-types'

const StatisticsList = ({title,  stats }) => {
  
  return (
    < section class="statistics" >
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
       
        {stats.map(item =>
          <Statistics
            id={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        )}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string

  }))
}
export default StatisticsList;