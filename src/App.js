import React, { Component } from 'react';
import Card from './components/card.js';
import SearchBox from './components/search-box.js';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      username: 'dzole0311',
      realName: '',
      location: '',
      followers: '',
      following: '',
      repos: ''
    }
  }

  render() {
    return (
      <div>
        <SearchBox fetchUser={this.fetchUser.bind(this)} />
        <Card data={this.state} />
      </div>
    );
  }

  fetchApi(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          avatar: data.avatar_url,
          username: data.login,
          realName: data.name,
          location: data.location,
          followers: data.followers,
          following: data.following,
          repos: data.public_repos
        })
      });
  }

  fetchUser(username) {
    let url = `https://api.github.com/users/${username}`;

    this.fetchApi(url);
  }

  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.username}`
    this.fetchApi(url);
  }

}

export default App;