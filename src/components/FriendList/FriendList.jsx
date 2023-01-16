import PropTypes from 'prop-types'
import FriendListItem from 'components/FriendListItem/FriendListItem';

 
const FriendList = ({ friends }) => {
  return (     
           <ul className="friend-list">
       
        {friends.map(item => {
          return (
            <FriendListItem
              id={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />)
        }
        )}
      </ul>
   );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

export default FriendList;