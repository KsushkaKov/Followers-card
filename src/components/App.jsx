import { UserList } from './UserList/UserList';
import { Component } from 'react';
import users from 'data/users.json';

export class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const follower = localStorage.getItem('followers');
    const parseFollowers = JSON.parse(follower);
    if (parseFollowers) {
      this.setState({ users: parseFollowers });
      return;
    }
    this.setState({
      users: users.map(user => {
        return { ...user, isFollowing: false };
      }),
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.setState.users) {
      localStorage.setItem('followers', JSON.stringify(this.state.users));
    }
  }

  onToggleClick = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          if (user.id !== id) {
            return user;
          }

          return {
            ...user,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
            isFollowing: !user.isFollowing,
          };
        }),
      };
    });
  };

  render() {
    const { users } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          background:
            'linear-gradient(103deg, rgb(235, 225, 188) 7.2%, rgb(232, 188, 234) 57.5%, rgb(203, 209, 244) 90.7%)',
        }}
      >
        {/* {users.length > 0 && <UserList users={users} onClick={this.onToggleClick} />} */}
        <UserList users={users} onClick={this.onToggleClick} />
      </div>
    );
  }
}
