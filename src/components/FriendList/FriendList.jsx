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
 
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}

console.log(FriendList)
export default FriendList;