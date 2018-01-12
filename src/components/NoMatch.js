import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>
        My Awesome 404 Page. You found this because I cleary didn't learn a thing the past 9 weeks. Click 
        <Link to='/'> Home</Link> to checkout my awesome green header.
      </Header>
    );
  }
}

export default NoMatch;
