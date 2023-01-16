import PropTypes from 'prop-types'
import css from "./FriendListItem.module.css";
 
const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id} >
      <span className={css.status} style={isOnline ? ({ backgroundColor: '#00fc60' }) : ({ backgroundColor: '#e60f0f' })}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}
export default FriendListItem;