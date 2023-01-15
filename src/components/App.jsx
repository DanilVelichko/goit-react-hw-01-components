import user from './profile/user.json'
import data  from './statistics/data.json'
import Profile from './profile/user-profile'; 
import StatisticsList from './statistics/statisticsList';


const App = () => {
  return (
    <div>

      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
 
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes} />
      
      <StatisticsList
        title="Upload stats"
        stats={data} />
         
      <StatisticsList stats={data} />
    </div>
  );
};

export default App;