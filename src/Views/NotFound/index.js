import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h2>{this.props.match.params.username}</h2>
    );
  }
}

export default NotFound;
