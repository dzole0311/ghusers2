import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <form 
        className='search-container'
        onSubmit={this.handleSubmit.bind(this)}>
        <input
          className='search-input'
          ref={(ref) => this.search = ref}
          placeholder='Search for a username...'
          type='text'/>

          <br/>
        
        <input
          className='search-submit'
          type='submit'
          placeholder='Submit' />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.search.value;
    this.props.fetchUser(username);
  }
}

export default SearchBox;