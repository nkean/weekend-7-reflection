import React, { Component } from 'react';
import { connect } from 'react-redux';

class Supported extends Component {
  nextPageHandler = () => {
    this.props.history.push('/4');
  }

  render() {
    return (
      <div>
        <h1>SUPPORTED</h1>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Supported);