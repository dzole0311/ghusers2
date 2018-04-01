import React, { Component } from 'react';
import Card from './components/card.js';
import SearchBox from './components/search-box.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      login: 'dzole0311',
      realName: '',
      location: '',
      followers: '',
      following: '',
      repos: '',
      address: ''
      }
  }

  fetchUser(username) {
    let url = `https://api.github.com/users/${username}`;

    this.fetchApi(url);
  };

    fetchApi = (url) => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                name: data.name,
                avatar: data.avatar_url,
                login: data.login,
                realName: data.name,
                location: data.location,
                followers: data.followers,
                following: data.following,
                repos: data.public_repos
            })
        });
    }

  componentDidMount() {
    let url = `https://api.github.com/users/${this.state.login}`;
    this.fetchApi(url);
  }

  render() {
    return (
      <div>
        <SearchBox fetchUser={this.fetchUser.bind(this)}/>
        <Card data={this.state} />
      </div>
    );
  }
}

export default App;
