// import PropTypes from 'prop-types';
import css from './UserList.module.css';
import { User } from 'components/User/User';

export const UserList = ({ users, onClick }) => {
  return (
    <ul className={css.UserList}>
      {users.map(user => {
        return <User key={user.id} user={user} onClick={onClick} />;
      })}
      {/* <User key={user.id} user={user} onClick={onClick} /> */}
    </ul>
  );
};

// UserList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }).isRequired
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
