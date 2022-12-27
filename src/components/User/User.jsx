import PropTypes from 'prop-types';
import css from './User.module.css';
import logo from '../../images/logo.svg';
import { Button } from 'components/Button/Button';

export const User = ({ user, onClick }) => {
  return (
    <li className={css.TweetCard}>
      <div className={css.Logo}>
        <img src={logo} alt="GoIT logo" />
      </div>
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.UserAvatar}>
          <img src={user.avatar} alt="" className={css.UserPicture} />
        </div>
        <p className={css.UserTweets}>{user.tweets} tweets</p>
        <p className={css.UserFollowers}>
          {user.followers.toLocaleString('en-US')} followers
        </p>

        <Button user={user} onClick={onClick} />
      </div>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
};
