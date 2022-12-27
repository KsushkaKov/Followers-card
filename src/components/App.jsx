import { UserList } from './UserList/UserList';
import { Component } from 'react';
import users from 'data/users.json';

export class App extends Component {
  // state = {
  //   tweets: 125,
  //   followers: 100500,
  //   isFollowing: false,
  // };

  state = {
    users: users.map(user => {
      return { ...user, isFollowing: false };
    }),
    // isFollowing: '',
  };

  componentDidMount() {
    const follower = localStorage.getItem('followers');
    // const followingStatus = localStorage.getItem('folowwStatus');
    const parseFollowers = JSON.parse(follower);
    // const parseStatus = JSON.parse(followingStatus);
    if (parseFollowers) {
      this.setState({ users: parseFollowers });
    }
    // if (parseStatus) {
    //   this.setState({ isFollowing: parseStatus });
    // }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.setState.users) {
      localStorage.setItem('followers', JSON.stringify(this.state.users));
    }
    // if (prevState.isFollowing !== this.setState.isFollowing) {
    //   localStorage.setItem(
    //     'folowwStatus',
    //     JSON.stringify(this.state.isFollowing)
    //   );
    // }
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
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <UserList users={users} onClick={this.onToggleClick} />
        {/* <User
          tweets={tweets}
          followers={followers}
          onToggleClick={this.onToggleClick}
          isFollowing={isFollowing}
        /> */}
      </div>
    );
  }
}
