import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

class SearchBox extends Component {
  render() {
    return (
      <Form className='searchContainer'
        onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
            <input
              className='inputBar'
              ref={(ref) => this.search = ref}
              placeholder='Search for a username...'
              type='text'/>

            <input
              className='button btn btn-success'
              type='submit'
              placeholder='Submit' />
          </FormGroup>
      </Form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.search.value;
    this.props.fetchUser(username);
  }
}

export default SearchBox;
