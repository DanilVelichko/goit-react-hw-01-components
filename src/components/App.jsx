import user from '../data/user.json'
import data from '../data/data.json'
import friends  from '../data/friends.json'
import Profile from './Profile/User-profile'; 
import StatisticsList from './StatisticsList/StatisticsList';
import FriendList from './FriendList/FriendList';


const App = () => {
  return (
    <>
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
    

      <FriendList friends={friends} />
    </>
  );
};

export default App;