// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <h1>ADMIN</h1>
    );
  }
}

export default connect()(Admin);