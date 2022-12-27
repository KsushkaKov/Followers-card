import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ user, onClick }) => {
  return (
    <button
      type="button"
      className={user.isFollowing ? css.Active : css.Btn}
      onClick={() => onClick(user.id)}
    >
      {user.isFollowing ? 'Following' : 'Follow'}
    </button>
  );
};

Button.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
