import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types'

const StatisticsList = ({title,  stats }) => {
  
  return (
    < section className="statistics" >
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
       
        {stats.map(item => {
          return (
            <Statistics
              id={item.id}
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
    title: PropTypes.string

  }))
}
export default StatisticsList; 