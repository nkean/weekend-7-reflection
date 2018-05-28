import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  nextPageHandler = () => {
    this.props.history.push('/2');
  }

  render() {
    return (
      <div>
        <h1>FEELING</h1>
        <button onClick={this.nextPageHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Feeling);