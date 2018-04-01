import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <div className='search-container'
        onSubmit={this.handleSubmit.bind(this)}>
        <form>
            <input
              className='search-container--input'
              ref={(ref) => this.search = ref}
              placeholder='Search for a github username...'
              type='text'/>

            <input
              className='search-container--submit'
              type='submit'
              placeholder='Submit' />
          </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.search.value;
    this.props.fetchUser(username);
  }
}

export default SearchBox;
