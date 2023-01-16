import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions  from '../data/transactions.json'
import Profile from './Profile/Profile'; 
import StatisticsList from './StatisticsList/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


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
         
        

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;